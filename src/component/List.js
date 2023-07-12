import { useEffect } from "react";
import axios from "axios";
function List({menu}){

    
    
    const fetchList = async() => {
        try{
            // const query = menu === 'all' ? '':`&category=${category}`;
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.React_APP_TMDB_API_KEY}&language=en-US&page=1`,);
            // console.log(response);
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