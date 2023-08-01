import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { genresList } from "../store/Store";
import { selectGenre, unselectGenre } from "../store/Store";
import styles from "../style/Nav.module.css";

function Nav(){
    const genreArr = useSelector((state) => state.reducer2);
    const dispatch = useDispatch();
    
    const navMenu = [
        {
            name:'현재 상영 중인 영화',
            code:'now_playing',
        },
        {
            name:'개봉 예정 영화',
            code:'upcoming',
        },
        {
            name:'인기 영화',
            code:'popular',
        },
    ]

    const addGenre = (e) => {
        dispatch(selectGenre(e.target.id));
    }

    const removeGenre = (e) => {
        dispatch(unselectGenre(e.target.id));
    }

    const {status, data} =  useQuery(['genre'], ()=>genresList(),{
        staleTime: Infinity,
    });

    if(status === 'success'){
        return (
            <div>
                {navMenu.map(e => <div key={e.code}><Link to={`/${e.code}`}>{e.name}</Link></div>)}
                <div>카테고리</div>
                <div>
                    {status === 'success' ? data.map((e) => {if(genreArr.indexOf(Number(e.id)) > -1){return(<div id={e.id} key={e.id} onClick={removeGenre} className={styles.seletedGenre}>{e.name}</div>)}else{return(<div id={e.id} key={e.id} onClick={addGenre} className={styles.genre}>{e.name}</div>)};}) : null}
                </div>
            </div>
        )
    }
}

export default Nav;