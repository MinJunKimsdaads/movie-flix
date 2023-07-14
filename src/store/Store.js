import { useEffect } from "react";
import { createStore } from "redux";
import axios from "axios";

const totalState = {
    option1 : '최신',
    option2 : [],
    option3 : 'keyword',
}

const genresList = async(arr) => {
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.React_APP_TMDB_API_KEY}&language=ko-KR`);
        const test = response.data.genres;
        return test;
    }catch(e){
        console.log(e);
    }
}

const firstFetchList = async(state) => { //처음 리스트 출력 
    try{
        console.log(state);
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.React_APP_TMDB_API_KEY}&language=ko-KR&page=1`,);
    }catch(e){
        console.log(e);
    }
}

const fetchList = async(state) => { //그 다음 리스트 출력
    try{
        console.log(state);
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.React_APP_TMDB_API_KEY}&language=ko-KR&page=1`,);
    }catch(e){
        console.log(e);
    }
}

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

export {store, firstFetchList, fetchList, genresList};

/////////예시임/////////////
// const 장르 = [
    
// ]

// const fetchGenre = () => {
    
// }

// const fetchList = () => {
    
// }

// useEffect(()=>{
//     fetch1(); //종별 fetch
// },[])

// useEffect(()=>{
//     fetch2(); //list fetch
// },['먹이','크기','지역','기타'])

/////////예시임/////////////