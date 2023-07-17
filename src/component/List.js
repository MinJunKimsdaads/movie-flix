import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { firstFetchList, fetchList } from "../store/Store";
function List(){
    const {menu} = useParams();
    const [list, setList] = useState([]);
    useEffect(()=>{
        if(!menu){
            firstFetchList(menu).then((result)=>{
                 
            })
        }
    },[]);

    useEffect(()=>{
        if(menu){
            fetchList(menu).then((result)=>{
    
            })
        }
    },[menu]);

    return (
        <div>
            {list.map(()=>{return (<div></div>)})}
        </div>
    )
}

export default List;