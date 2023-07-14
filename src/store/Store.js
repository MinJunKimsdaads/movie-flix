import { useEffect } from "react";
import { createStore } from "redux";
import axios from "axios";

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

//인기순 https://api.themoviedb.org/3/movie/popular
const firstFetchList = async(state) => { //처음 리스트 출력 
    try{
        const url = `https://api.themoviedb.org/3/movie/latest?api_key=45c6a13c9f39865d3a3e9d48c9989352&language=ko-KR&page=1`;
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=45c6a13c9f39865d3a3e9d48c9989352&language=ko-KR&page=1`,);
    }catch(e){
        console.log(e);
    }
}

const fetchList = async(state) => { //그 다음 리스트 출력
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=45c6a13c9f39865d3a3e9d48c9989352&language=ko-KR&page=1`,);
    }catch(e){
        console.log(e);
    }
}

const reducer = (state = 1, action) => {
    switch(action.type){
        case 'totalCategory':
        case 'test2':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(reducer);

export {store, firstFetchList, fetchList};