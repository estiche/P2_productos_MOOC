import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";


export default function Resultado(props){
    
    function inicio() {
        return (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        );
      }

    return <>{ props.productos? 
      /*componente renderizara las cars */
        <div>{props.productos.map((e,i)=><Link to={"/productos/" + i}><img src={e.thumbnail} key={i} width="50" height="50" alt="thumbnail"></img></Link> )} </div>
        : 
        <div>{inicio()}</div>}</>
    
    }