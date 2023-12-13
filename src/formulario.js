import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


export default function Formulario(){
const estilo={
    "width":"300px"
}

    return <div>
    <h2 id="catalogo">Buscador de catálogo</h2>
    <div style={estilo} className='m-auto'>
    <InputGroup className="mb-3" >
        
        <Form.Control type="text" id="filtro" aria-describedby="passwordHelpBlock" />
        <Button variant="outline-secondary" id="buscador">
          Buscar
        </Button>
       
  
      </InputGroup>
      </div>
    </div> 
    
    }