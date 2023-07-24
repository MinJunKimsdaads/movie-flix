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

const firstFetchList = async(page) => { //처음 리스트 출력 
    try{
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=45c6a13c9f39865d3a3e9d48c9989352&language=ko-KR`;
        const response = await axios.get(url,);
        const totalPage = response.data.total_pages;
        let totalResultArr = [];
        
        for(let i=1;i<=totalPage;i++){
            let newResponse = await axios.get(url+`&page=${i}`,);
            totalResultArr.push(...newResponse.data.results);
        }
        return totalResultArr;
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

const moveToFirst = () => {
    return {
        type:'first',
    }
}

const moveToEnd = (result) => {
    return {
        type:'end',
        result:result,
    }
}

const moveToPrev = () => {
    return {
        type:'prev',
    }
}

const moveToNext = () => {
    return {
        type:'next',
        
    }
}

const moveToPage = (num) => {
    return{
        type:'num',
        result:num,
    }
}

////// 페이지네이션 state //////
const reducer = (state = 1, action) => {
    switch(action.type){
        case 'prev':
            return state - 1;
        case 'next':
            return state + 1;
        case 'first':
            return 1;
        case 'end':
            return action.result;
        case 'num':
            return action.result;
        default:
            return state;
    }
}

////// 장르 state //////
const reducer2 = (state = [], action)=>{
    switch(action.type){
        case 'addGenre':
            return [...state,Number(action.genre)];
        case 'deleteGenre':
            return state.filter(e => e !== Number(action.genre));
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


export {store, firstFetchList, fetchList, genresList, selectGenre, unselectGenre, moveToFirst, moveToEnd, moveToNext, moveToPrev, moveToPage};
