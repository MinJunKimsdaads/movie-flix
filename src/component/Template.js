import Nav from "./Nav";
import Search from "./Search";
import Result from "./Result";
import List from "./List";
import styles from "../style/Template.module.css";

function Template(){
    return (
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
                    <List></List>
                </div>
            </div>
        </div>
    )
}

export default Template;