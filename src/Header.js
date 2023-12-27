import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Header(props){


    return <div id="cabecera">
    <img className="logo" src="http://localhost:3000/logo192.png" alt="logo"></img>
    <h3 className="mensaje">Alejandro Sanchez Lopez</h3>
    { props.id && <Link to="/" style={{'position':'absolute','right':'10px'}}> 
        <Button variant="secondary" id="volver">ATRAS</Button> 
    </Link> }
    </div>
    
    }