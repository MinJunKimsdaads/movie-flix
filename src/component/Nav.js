import styles from "../style/Nav.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { genresList } from "../store/Store";
import { useSelector, useDispatch } from "react-redux";
import { selectGenre, unselectGenre } from "../store/Store";

function Nav(){
    const [genre, setGenre] = useState([]);
    const genreArr = useSelector((state) => state.reducer2);
    const dispatch = useDispatch();
    
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

    const addGenre = (e) => {
        dispatch(selectGenre(e.target.id));
    }

    const removeGenre = (e) => {
        dispatch(unselectGenre(e.target.id));
    }

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
                {genre.map((e) => {if(genreArr.indexOf(`${Number(e.id)}`) > -1){return(<div id={e.id} key={e.id} onClick={removeGenre}>{e.name}선택</div>)}else{return(<div id={e.id} key={e.id} onClick={addGenre}>{e.name}</div>)};})}
            </div>
        </div>
    )
}

export default Nav;