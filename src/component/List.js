import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { firstFetchList, fetchList } from "../store/Store";
import { useSelector } from "react-redux";

function List(){
    const {menu} = useParams();
    const [list, setList] = useState([]);

    const page = useSelector((state) => state.reducer);
    const limit = 5;
    const [resultPage, setResultPage] = useState(0);

    useEffect(()=>{
        if(!menu){
            firstFetchList(menu, page).then((result)=>{
                setList(result);
                setResultPage(result.page);
            })
        }
    },[]);

    useEffect(()=>{
        if(menu){
            fetchList(menu, page).then((result)=>{
                setList(result);
                setResultPage(result.page);
            })
        }
    },[menu,page]);

    return (
        <div>
            {list.map((e)=>{return (<Item key={e.id} name={e.title}></Item>)})}
            <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
        </div>
    )
}

export default List;