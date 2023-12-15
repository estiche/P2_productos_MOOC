import { useParams } from "react-router-dom";



export default function ProductoId(){
let {id}= useParams();


    if(props.productos){
        return <p>PRODUCTO: {JSON.stringify(producto[id])}</p> 
    }else{
        props.carga();
        
    }

}