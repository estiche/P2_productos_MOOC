import {useParams, useLocation} from "react-router-dom";
import Header from "./Header";

export default function Location(props) {
  let { id } = useParams();
  const location = useLocation(); 
  let producto= props.theproducts[id]
  
	return <div>
    <Header id={id}/>	
    <div className='container' > 
      <div id="divlocation" style={{'marginTop':'20px'}}>Location es: {location.pathname}</div>
	    <div>ProductId es:<span id="divproductid"style={{'marginTop':'10px'}} >{id}</span></div>
	    <div>
        <div style={{'marginTop':'40px'}}>
	        <img style={{'float':'left','marginRight':'4rem','border':'solid 2px'}} height="300" width="450" src={producto.thumbnail} alt="thumbnail"/>
	        <div style={{'textAlign':'left'}}>
            <p id="titulo"><strong>NOMBRE:</strong> {producto.title}</p>
            <p><strong>PRECIO:</strong> {producto.price}&euro;</p>
            <p><strong>DESCRIPCION:</strong> {producto.description}</p>
            <p><strong>CATREGORIA:</strong> {producto.category}</p>
            <p><strong>STOCK:</strong>  {producto.stock}</p>
          </div>
        </div>
	    </div>
    </div>
  </div>
 
}
