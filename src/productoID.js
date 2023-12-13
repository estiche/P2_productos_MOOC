import { useParams } from "react-router-dom"

export default function ProductoId(props){
let {id}= useParams();

return <p>PRODUCTO: {id}</p>

}