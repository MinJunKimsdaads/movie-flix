import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Item from "./Item";
import { fetchList } from "../store/Store";
import PageNation from "./PageNation";


function List(){
    const [loading, setLoading] = useState(true);
    const {menu} = useParams();
    const [list, setList] = useState([]);
    const page = useSelector((state) => state.reducer);
    const selectedGenre = useSelector((state) => state.reducer2);
    const limit = 20;

    useEffect(()=>{
        fetchList(menu).then((result)=>{
            if(selectedGenre.length > 0){
                let newResult = [];
                result.forEach((e) => {
                    if(e.genre_ids.filter(x => selectedGenre.includes(x)).length > 0){
                        newResult.push(e);
                        return;
                    }
                });
                setList(newResult);
            }else{
                setList(result);
            }
            setLoading(false);
        });
    },[menu,page,selectedGenre]);

    return (
        <div>
            {list.filter((e, index)=> index >= (page - 1)*limit && index <= page*limit -1).map((e)=>{return <Item key={e.id} name={e.title}></Item>})}
            <PageNation page={page} limit={limit} total={Math.ceil(list.length/limit)}></PageNation>
        </div>
    )
}

export default List;