import { useParams } from "react-router-dom";
function Viewer(){
    const {id} = useParams();
    return (
        <div>
            {id}
        </div>
    )
}

export default Viewer;