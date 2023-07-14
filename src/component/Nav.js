import styles from "../style/Nav.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav(){
    const [category, setCategory] = useState([]);

    const fetchGenre = async() => {
        try{
            const json = await(
                await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=45c6a13c9f39865d3a3e9d48c9989352&language=ko-KR`)
            ).data
            if(json.genres){
                setCategory(json.genres);
            }
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        fetchGenre();
    },[]);
    
    const navMenu = [
        {
            name:'최신순',
            code:'latest',
        },
        {
            name:'인기순',
            code:'popular',
        },
    ]

    

    return (
        <div>
            {navMenu.map(e => <div key={e.code}><Link to={`/${e.code}`}>{e.name}</Link></div>)}
            <div>카테고리</div>
            <div>
            {category.map(e => <div key={e.id}><Link to={`/${e.id}`}>{e.name}</Link></div>)}
            </div>
        </div>
    )
}

export default Nav;