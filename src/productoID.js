import { useParams } from "react-router-dom";
import Header from './header';

export default function ProductoId(props){
let {id}= useParams();

        return<div>
        <Header id={id}/>
        {props.data && <p>PRODUCTO: {JSON.stringify(props.data[id])}</p> }
        </div>
    

}