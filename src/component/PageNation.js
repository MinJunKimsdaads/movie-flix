import { useDispatch } from "react-redux";
import { moveToFirst, moveToEnd, moveToNext, moveToPrev } from "../store/Store";

function PageNation({page, limit, total}){
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
    
    return (
        <div>
            {page > 1 ? <span onClick={first}>처음</span>:null}
            {page > 1 ? <span onClick={prev}>이전</span>:null}
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            {total > page ? <span onClick={next}>다음</span>:null}
            {total > page ? <span onClick={end}>끝</span>:null}
        </div>
    )
}

export default PageNation;