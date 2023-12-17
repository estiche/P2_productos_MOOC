import {useParams, useLocation} from "react-router-dom";
import Header from "./header";




export default function Location(props) {
  let { id } = useParams();
  
	const location = useLocation(); 

	return (<div>
  <Header id={id}/>	
  <div className='container' > 
  <div id="divlocation" >Location es: {location.pathname}</div>
	{id && <div id="divproductid">ProductId es: {props.data[id].id}</div>}
	<div>
  <div style={{'marginTop':'40px'}}>
	  <img style={{'float':'left','marginRight':'20px'}}
    height="300"
    width="450"
		className=""
		src={props.data[id].thumbnail}
		alt="thumbnail"
	  />
    <div style={{'textAlign':'left'}}>
    <p>NOMBRE: {props.data[id].title}</p>
    <p>PRECIO: {props.data[id].price}</p>
    <p>DESCRIPCION: {props.data[id].description}</p>
    <p>CATREGORIA: {props.data[id].category}</p>
    <p>STOCK:  {props.data[id].stock}</p>
    </div>
  </div>
	</div>
</div>
</div>

	)
}