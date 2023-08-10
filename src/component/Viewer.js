import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMovie } from "../store/Store";
import Loading2 from "./Loading2";
function Viewer(){
    const {id} = useParams();
    const {status, data} = useQuery([id],()=>fetchMovie(id),{
        staleTime: Infinity,
    })

    if(status === 'success'){
        console.log(data);
        return(
            <div>
                {id}
            </div>
        )
    }else{
        return(
            <div>
                <Loading2></Loading2>
            </div>
        )
    }
}

export default Viewer;