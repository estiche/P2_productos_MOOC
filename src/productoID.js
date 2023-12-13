import { useParams } from "react-router-dom";



export default function ProductoId(props){
let {id}= useParams();


    if(props.productos){
        return <p>PRODUCTO: {JSON.stringify(props.productos[id])}</p> 
    }else{
        props.carga();
        
    }

}