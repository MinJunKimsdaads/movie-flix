import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style/Search.module.css";

function Search(){
    const [keyword, setKeyword] = useState('');
    const onChange = (e) => {
        setKeyword(e.target.value);
    }
    return (
        <div className={styles.searchBox}>
            <input value={keyword} onChange={onChange}></input>
            <span>
                <Link to={`/keyword:${keyword}?`}>검색</Link>
            </span>
        </div>
    )
}

export default Search;