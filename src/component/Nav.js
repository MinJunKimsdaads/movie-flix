import styles from "../style/Nav.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { genresList } from "../store/Store";

function Nav(){
    const [genre, setGenre] = useState([]);
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

    useEffect(()=>{
        genresList().then((result)=>{
            setGenre(result);  
        })
    },[]);

    return (
        <div>
            {navMenu.map(e => <div key={e.code}><Link to={`/${e.code}`}>{e.name}</Link></div>)}
            <div>카테고리</div>
            <div>
                {genre.map(e => <div key={e.id}>{e.name}</div>)}
            </div>
        </div>
    )
}

export default Nav;