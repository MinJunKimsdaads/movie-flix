import styles from "../style/Nav.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { genresList } from "../store/Store";
import { useSelector, useDispatch } from "react-redux";
import { selectGenre } from "../store/Store";

function Nav(){
    const [genre, setGenre] = useState([]);
    const [test1, setTest1] = useState(null);
    const genreArr = useSelector((state) => state.reducer2);
    const dispatch = useDispatch();
    const click = (e) => {
       
        dispatch(selectGenre(e.target.id));
        setTest1(e.target.id);
    }

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

    useEffect(()=>{
        console.log(genreArr.indexOf(test1));
    },[genreArr]);

    

    return (
        <div>
            {navMenu.map(e => <div key={e.code}><Link to={`/${e.code}`}>{e.name}</Link></div>)}
            <div>카테고리</div>
            <div>
                {genre.map((e) => {if(genreArr.indexOf(e.id) > 0){return (<div id={e.id} key={e.id} onClick={click}>{e.name}</div>)}else{return (<div id={e.id} key={e.id} onClick={click}>{e.name}xxxxx</div>)}})}
            </div>
        </div>
    )
}

export default Nav;