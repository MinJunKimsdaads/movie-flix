import Nav from "../component/Nav";
import Search from "../component/Search";
import Result from "../component/Result";
import List from "../component/List";
import styles from "../style/Template.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ListPage(){
    const {menu} = useParams();
    const test =  useSelector((state) => state);
    console.log(test);
    
    return(
        <div className={styles.templateBox}>
            <div className={styles.navBox}>
                <Nav></Nav>
            </div>
            <div className={styles.mainBox}>
                <div className={styles.searchBox}>
                    <Search></Search>
                </div>
                <div className={styles.itemBox}>
                    <Result></Result>
                    <List menu={menu}></List>
                </div>
            </div>
        </div>
    )
}

export default ListPage;