import { useEffect } from "react";
import { createStore } from "redux";

const reducer = (state = 1, action) => {
    switch(action.type){
        case 'test1':
            return state + 1;
        case 'test2':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;

/////////예시임/////////////
// const 장르 = [
    
// ]

// const fetchGenre = () => {
    
// }

// const fetchList = () => {
    
// }

// useEffect(()=>{
//     fetchGenre(); //장르 fetch
//     fetchList(); //영화 리스트 ㅇ
// },[])

// useEffect(()=>{
//     fetch1(); //종별 fetch
// },[])

// useEffect(()=>{
//     fetch2(); //list fetch
// },['먹이','크기','지역','기타'])

/////////예시임/////////////