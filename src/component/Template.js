import Nav from "./Nav";
import Search from "./Search";
import Result from "./Result";
import List from "./List";

function Template(){
    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
            <div>
                <div>
                    <Search></Search>
                    <Result></Result>
                </div>
                <div>
                    <List></List>
                </div>
            </div>
        </div>
    )
}

export default Template;