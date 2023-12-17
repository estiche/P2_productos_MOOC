import Header from "./header";
import Spinner from 'react-bootstrap/Spinner';


export default function Espera(props){
    
    setTimeout(() => {
        props.carga() 
    }, 2000);
    return<div>
    <Header></Header>
    <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
}