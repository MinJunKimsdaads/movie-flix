import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style/Search.module.css";
import { useSelector, useDispatch } from "react-redux";


function Search(){
    const test =  useSelector((state) => state.reducer1);
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState('');
    const onChange = (e) => {
        setKeyword(e.target.value);
    }
    const test1 = () => {
        return{
            type:'xxx'
        }
    }
    const onClick = () => {
        dispatch(test1());
        console.log(test);
    }
    return (
        <div className={styles.searchBox}>
            <input value={keyword} onChange={onChange}></input>
            <span>
                <span onClick={onClick}>test</span>
                <Link to={`/${keyword}?`}>검색{test}</Link>
            </span>
        </div>
    )
}

export default Search;