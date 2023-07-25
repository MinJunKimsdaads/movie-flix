import { createStore, combineReducers } from "redux";
import axios from "axios";

///fetch///
const genresList = async() => {
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=45c6a13c9f39865d3a3e9d48c9989352&language=ko-KR`);
        const data = response.data.genres;
        return data;
    }catch(e){
        console.log(e);
    }
}

const fetchList = async(menu) => { //그 다음 리스트 출력
    try{
        const url = `https://api.themoviedb.org/3/movie/${menu ? menu:'now_playing'}?api_key=45c6a13c9f39865d3a3e9d48c9989352&language=ko-KR`;
        const response = await axios.get(url,);
        let totalPage = response.data.total_pages;
        if(totalPage > 500){
            totalPage = 500;
        }
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
///fetch///

///genre///
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
///genre///

///pagenation///
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
///pagenation///

///keyword///
const insertKeyword = (keyword) => {
    return {
        type: 'addKeyword',
        keyword: keyword,
    }
}
///keyword///

///리듀서///
/// 페이지네이션 state ///
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
            return action.keyword;
        default:
            return state;
    }
}

const reducers = combineReducers({
    reducer : reducer,
    reducer2 : reducer2,
    reducer3 : reducerKeword,
})

const store = createStore(reducers);
///리듀서///


export {store, fetchList, genresList, selectGenre, unselectGenre, moveToFirst, moveToEnd, moveToNext, moveToPrev, moveToPage, insertKeyword};
