import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchMovie } from "../store/Store";
function Viewer(){
    const {id} = useParams();
    useEffect(()=>{
        const useMovie = fetchMovie(id);
    },[id]);
    return (
        <div>
            {id}
        </div>
    )
}

export default Viewer;