import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';




export default function Formulario(props){

  const[busca, setBusca] = useState('');

    return <div>
    <div style={{'height':'5rem','padding':'1rem 0px 1rem 0px'}}>
   
    <div style={{'position':'absolute','width':'100%'}}>
        <h2 id="catalogo">Buscador de catálogo</h2>
    </div>
    
    
    
    <div style={{'zIndex':'1','position':'relative','float':'right'}}>
     
      <Button variant="outline-secondary" id="buscador" onClick={()=>props.resultado(busca)}>Buscar</Button>
    </div>

    
    <InputGroup className="mb-3" style={{'width':'20rem','float':'right'}} >
        
        <Form.Control type="text" id="filtro" value={busca} onChange={(e)=>setBusca(e.target.value)} />
        
    </InputGroup>
    
     
    </div>
    <Form.Select aria-label="Default select example" 
      style={{'width':'20rem','margin':'auto'}} 
      onChange={(e)=>{props.carga_categoria(e.target.value)}}>
        <option>All</option>
        {props.categorias && props.categorias.map((e,i)=><option value={e} key={i}>{e}</option>)}
    </Form.Select>
  </div>
    
    }