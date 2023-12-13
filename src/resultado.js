import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export default function Resultado(props){
  const tarjeta={
    "border": "4px solid black",
     "padding": "5px"
  }
    
    function inicio() {
        return (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        );
      }

    return <div>
        { props.productos? 
        <div>{props.productos.map((e,i)=>
          
                <Card style={{ width: '18rem' , height : '20rem', border : '2px solid black', padding: '5px'}} key={i}>
                <Link to={"/productos/" + i} ><Card.Img variant="top"  src={e.thumbnail} height="100"/></Link>
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.price}</Card.Text>
                  </Card.Body>
                </Card>
           )}
        </div>
        : 
        <div>{inicio()}</div>}<div/>
        </div>
    
    }
  