import { useParams, useNavigate, Link } from "react-router-dom";


export default function ProductoId(props){
let {id}= useParams();
let navega = useNavigate();


if(props.productos){
    return <p>PRODUCTO: {JSON.stringify(props.productos[id])}</p> 
   
}else{
    
    return <Link to="/">HOME</Link>
    

}



}