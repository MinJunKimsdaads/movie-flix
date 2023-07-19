import { useEffect } from "react";
import { createStore, combineReducers } from "redux";
import axios from "axios";
import { act } from "react-dom/test-utils";

const totalState = [
    {
        menu:'',
    },
    {
        category:[],
    },
    {
        keyword:'',
    },
    {
        totalCate:[],
    }
]

const genresList = async(menu, page) => {
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=45c6a13c9f39865d3a3e9d48c9989352&language=ko-KR`);
        const data = response.data.genres;
        return data;
    }catch(e){
        console.log(e);
    }
}

const firstFetchList = async(menu, page) => { //처음 리스트 출력 
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=45c6a13c9f39865d3a3e9d48c9989352&language=ko-KR&page=${page}`,);
        return response.data.results;
    }catch(e){
        console.log(e);
    }
}

const fetchList = async(menu, page) => { //그 다음 리스트 출력
    try{
        
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${menu}?api_key=45c6a13c9f39865d3a3e9d48c9989352&language=ko-KR&page=${page}`,);
        return response.data.results;
    }catch(e){
        console.log(e);
    }
}

const selectGenre = (genre) => {
    return {
        type: 'addGenre',
        genre: genre,
    }
}

const unselectGenre = (genre) => {
    return {
        type: 'deleteGenre',
        genre: genre,
    }
}

////// 페이지네이션 state //////
const reducer = (state = 1, action) => {
    switch(action.type){
        case 'prev':
            return state - 1;
        case 'next':
            return state + 1;
        
        default:
            return state;
    }
}

////// 장르 state //////
const reducer2 = (state = [], action)=>{
    switch(action.type){
        case 'addGenre':
            return [...state,action.genre];
        case 'deleteGenre':
            return state.filter(e => e !== action.genre);
        default:
            return state;
    }
}

////// 키워드 state //////
const reducerKeword = (state = '', action) => {
    switch(action.type){
        case 'addKeyword':
            return state + 1;
        case 'deleteKeyword':
            return state - 1;
        default:
            return state;
    }
}

const reducers = combineReducers({
    reducer : reducer,
    reducer2 : reducer2,
})

const store = createStore(reducers);


export {store, firstFetchList, fetchList, genresList, selectGenre, unselectGenre};
