import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


export default function Formulario(){

    return <div>
   
    <div style={{'position':'absolute','width':'100%'}}><h2 id="catalogo">Buscador de catálogo</h2></div>
    <div style={{'z-index':'1','position':'relative','float':'right'}}>
      <input type="text" class="form-control" style={{'width':'18rem','display':'inline-block'}} placeholder="Jane Doe"></input>
      <Button variant="outline-secondary" id="buscador">Buscar</Button>
    </div>

    
    <InputGroup className="mb-3" >
        
        <Form.Control type="text" id="filtro" aria-describedby="passwordHelpBlock" />
        
    </InputGroup>
    
    </div>
   
    
    }