import {useParams, useLocation} from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import Espera from "./espera";

export default function Location(props) {
  let { id } = useParams();
  const location = useLocation(); 
  let producto= props.theproducts[id]
  
	return <div>
    <Header id={id}/>	
    <div className='container' > 
      <div id="divlocation" >Location es: {location.pathname}</div>
	    <div>ProductId es:<div id="divproductid">{id}</div></div>
	    <div>
        <div style={{'marginTop':'40px'}}>
	        <img style={{'float':'left','marginRight':'20px'}} height="300" width="450" src={producto.thumbnail} alt="thumbnail"/>
	        <div style={{'textAlign':'left'}}>
            <p id="titulo">NOMBRE: {producto.title}</p>
            <p>PRECIO: {producto.price}</p>
            <p>DESCRIPCION: {producto.description}</p>
            <p>CATREGORIA: {producto.category}</p>
            <p>STOCK:  {producto.stock}</p>
          </div>
        </div>
	    </div>
    </div>
  </div>
 
}
