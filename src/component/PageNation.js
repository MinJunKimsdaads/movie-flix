import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { moveToFirst, moveToEnd, moveToNext, moveToPrev } from "../store/Store";

function PageNation({page, limit, total}){
    const block = 5;
    const [blockArr, setBlockArr] = useState([Math.trunc(page/block)*block+1,Math.trunc(page/block)*block+2,Math.trunc(page/block)*block+3,Math.trunc(page/block)*block+4,Math.trunc(page/block)*block+5]);
    const dispatch = useDispatch();

    const first = () => {
        dispatch(moveToFirst());
    }
    
    const end = () => {
        dispatch(moveToEnd(total));
    }

    const next = () => {
        dispatch(moveToNext());
    }

    const prev = () => {
        dispatch(moveToPrev());
    }

    useEffect(()=>{
        setBlockArr([Math.trunc(page/block)*block+1,Math.trunc(page/block)*block+2,Math.trunc(page/block)*block+3,Math.trunc(page/block)*block+4,Math.trunc(page/block)*block+5]);
        console.log(page);
        console.log(blockArr);
    },[page])
    
    return (
        <div>
            {page > 1 ? <span onClick={first}>처음</span>:null}
            {page > 1 ? <span onClick={prev}>이전</span>:null}
            {blockArr.map((e)=>{return(<span key={e} >{e}</span>)})}
            {total > page ? <span onClick={next}>다음</span>:null}
            {total > page ? <span onClick={end}>끝</span>:null}
        </div>
    )
}

export default PageNation;