import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { moveToFirst, moveToEnd, moveToNext, moveToPrev, moveToPage } from "../store/Store";

function PageNation({page, limit, total}){
    const block = 5;
    const pageArr = [Math.floor((page-1)/block)*block+1,Math.floor((page-1)/block)*block+2,Math.floor((page-1)/block)*block+3,Math.floor((page-1)/block)*block+4,Math.floor((page-1)/block)*block+5];
    const [blockArr, setBlockArr] = useState(pageArr);
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

    const num = (e) => {
        dispatch(moveToPage(Number(e.target.id)));
    }

    useEffect(()=>{
        setBlockArr(pageArr);
        console.log(page);
        console.log(blockArr);
    },[page])
    
    return (
        <div>
            {page > 1 ? <span onClick={first}>처음</span>:null}
            {page > 1 ? <span onClick={prev}>이전</span>:null}
            {blockArr.map((e)=>{return(<span key={e} id={e} onClick={page!=e? num:null}>{e}</span>)})}
            {total > page ? <span onClick={next}>다음</span>:null}
            {total > page ? <span onClick={end}>끝</span>:null}
        </div>
    )
}

export default PageNation;