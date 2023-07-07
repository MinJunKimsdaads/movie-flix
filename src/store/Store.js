const { useEffect } = require("react")

/////////예시임/////////////
const 장르 = [
    
]

const fetchGenre = () => {
    
}

const fetchList = () => {
    
}

useEffect(()=>{
    fetchGenre(); //장르 fetch
    fetchList(); //영화 리스트 ㅇ
},[])

useEffect(()=>{
    fetch1(); //종별 fetch
    fetch2(); //list fetch
},[])

useEffect(()=>{
    fetch2(); //list fetch
},['먹이','크기','지역','기타'])