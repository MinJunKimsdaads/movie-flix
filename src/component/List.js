import { useEffect } from "react";
import axios from "axios";
function List({menu}){
    
    const fetchList = async() => {
        try{
            // const query = menu === 'all' ? '':`&category=${category}`;
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=45c6a13c9f39865d3a3e9d48c9989352&language=en-US&page=1`,);
            console.log(response);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        fetchList();
    })

    return (
        <div>

        </div>
    )
}

export default List;