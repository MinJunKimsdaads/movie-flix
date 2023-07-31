import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import Item from "./Item";
import { fetchList } from "../store/Store";
import PageNation from "./PageNation";
import Loading from "./Loading";


function List(){
    const {menu} = useParams();
    const [list, setList] = useState([]);
    const page = useSelector((state) => state.reducer);
    const selectedGenre = useSelector((state) => state.reducer2);
    const keyword = useSelector((state) => state.reducer3);
    const limit = 20;

    const [loading, setLoading] = useState(true);

    const {status, data} =  useQuery([menu,keyword,selectedGenre], ()=>fetchList(menu,keyword,selectedGenre),{
        staleTime: Infinity,
    });

    if(status === 'success'){
        return(
            <div>
                {data.filter((e, index)=> index >= (page - 1)*limit && index <= page*limit -1).map((e)=>{return <Item key={e.id} name={e.title}></Item>})}
                <PageNation page={page} limit={limit} total={Math.ceil(data.length/limit)}></PageNation>
            </div>
        )
    }else{
        <div>
            <Loading></Loading>
        </div>
    }
}

export default List;