import styles from "../style/Nav.module.css";
import { Link } from "react-router-dom";

function Nav(){
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

    const navOption = [
        {
            name:'예술',
            code:'n1',
        },
        {
            name:'공포',
            code:'n2',
        },
        {
            name:'액션',
            code:'n3',
        },
    ]

    return (
        <div>
            {navMenu.map(e => <div key={e.code}><Link to={`/${e.code}`}>{e.name}</Link></div>)}
            <div>카테고리</div>
            <div>
                {navOption.map(e => <div key={e.code}><Link to={`/viewer/${e.code}`}>{e.name}</Link></div>)}
            </div>
        </div>
    )
}

export default Nav;