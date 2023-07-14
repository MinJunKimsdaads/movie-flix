import styles from "../style/Nav.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { genresList } from "../store/Store";

function Nav(){
    const [category, setCategory] = useState('22');
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

        const promise = genresList();
        const getData = async () => {
            await promise.then((data)=>{
                console.log(data);
                setCategory(data);
                console.log(category);
            });
        };

        getData();
        console.log(category);

        

    },[])

    

    return (
        <div>
            {navMenu.map(e => <div key={e.code}><Link to={`/${e.code}`}>{e.name}</Link></div>)}
            <div>카테고리</div>
            
        </div>
    )
}

export default Nav;