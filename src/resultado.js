import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
/*<div class="d-flex justify-content-around">...</div>  */
export default function Resultado(props){
  const tarjeta={
    "border": "2px solid grey",
     "padding": "5px",
     "margin" : "5px",
     "width": '180px' ,
     'flexShrink': 0
  }
    
    function inicio() {
        return (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )
      }
      
    
    return <div className='container'>
        { props.productos? 
        <div className="d-flex flex-row mt-3 justify-content-center flex-wrap">      
         
        {props.productos.map((e,i)=>
          
                <Card style={tarjeta} key={i}>
                <Link to={"/productos/" + i} >
                  <Card.Img variant="top"  src={e.thumbnail} height="100"/>
                </Link>
                  <Card.Body>
                    <Card.Text style={{'height':'50%', 'overflow':'hidden'}}>{e.title}</Card.Text>
                    <Card.Text style={{'textAlign':'start'}}>{e.price} Euros</Card.Text>
                  </Card.Body>
                </Card>
            )}
            </div>
           
          : 
            <div>{inicio()}</div>
        }
        </div>
           
    }
   