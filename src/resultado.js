import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const tarjeta={
  "border": "2px solid grey",
   "padding": "5px",
   "margin" : "5px",
   "width": '180px' ,
   'flexShrink': 0
}

export default function Resultado(props){
  
    return <div className='container'>
      
            <div className="d-flex flex-row mt-3 justify-content-center flex-wrap">      
            
               
            {(props.data.length > 0)? props.data.map((e,i)=>
                <Card style={tarjeta} key={i}>
                <Link to={"/productos/" + (e.id - 1)} >
                  <Card.Img variant="top"  src={e.thumbnail} height="100"/>
                </Link>
                  <Card.Body>
                    <Card.Text style={{'height':'50%', 'overflow':'hidden'}}>{e.title}</Card.Text>
                    <Card.Text style={{'textAlign':'start'}}>{e.price} Euros</Card.Text>
                  </Card.Body>
                </Card>
              ):
              <p>No se obtubieron resultados</p>

              }
              
            </div>
          </div>
           
    }
   