import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Item from "./Item";
import { fetchList } from "../store/Store";
import PageNation from "./PageNation";
import Loading from "./Loading";


function List(){
    const {menu} = useParams();
    const [list, setList] = useState([]);
    const loading = useSelector((state) => state.reducer4);
    const page = useSelector((state) => state.reducer);
    const selectedGenre = useSelector((state) => state.reducer2);
    const limit = 20;
    const dispatch = useDispatch();
    const test = () => {
        return {
            type:'close',
        }
    }
    
    useEffect(()=>{
        const closeLoading = () => {dispatch(test())};
        if(!loading){
            fetchList(menu).then((result)=>{
                console.log(menu);
                console.log(page);
                console.log(selectedGenre);
                console.log(loading);
                if(selectedGenre.length > 0){
                    let newResult = [];
                    result.forEach((e) => {
                        if(e.genre_ids.filter(x => selectedGenre.includes(x)).length > 0){
                            newResult.push(e);
                            return;
                        }
                    });
                    setList(newResult.filter((e)=>e.backdrop_path !== null));
                }else{
                    setList(result.filter((e)=>e.backdrop_path !== null));
                }
            }).then(()=>{setTimeout(()=>{
                closeLoading();
            },3000)});
        }
    },[menu,page,selectedGenre,loading,dispatch]);

    return (
        <div>
            {!loading ? <Loading></Loading>:
            list.filter((e, index)=> index >= (page - 1)*limit && index <= page*limit -1).map((e)=>{return <Item key={e.id} name={e.title}></Item>})
            }
            {loading ? <PageNation page={page} limit={limit} total={Math.ceil(list.length/limit)}></PageNation>:null}
        </div>
    )
}

export default List;