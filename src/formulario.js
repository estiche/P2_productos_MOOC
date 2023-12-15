import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


export default function Formulario(){

    return <div style={{'height':'5rem','padding':'1rem 0px 1rem 0px'}}>
   
    <div style={{'position':'absolute','width':'100%'}}><h2 id="catalogo">Buscador de catálogo</h2></div>
    <div style={{'z-index':'1','position':'relative','float':'right'}}>
     
      <Button variant="outline-secondary" id="buscador">Buscar</Button>
    </div>

    
    <InputGroup className="mb-3" style={{'width':'20rem','float':'right'}} >
        
        <Form.Control type="text" id="filtro" aria-describedby="passwordHelpBlock" />
        
    </InputGroup>
    
    
    </div>
   
    
    }