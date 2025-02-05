import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Formulario(props){
 
  const[busca, setBusca] = useState('');
  
  let categorias = props.productos.reduce((acum,e)=>{
    let item= e.category
    if(!acum.includes(item)){acum.push(item)}
    return acum;},[])

   return <div style={{'width':'100%','height':'120px', 'padding':'20px', 'marginBottom':'20px'}}>

          
          <div id="catalogo1" style={{'width':'100%','position':'absolute'}}>
            <h2 id="catalogo" style={{}}>Buscador de catálogo</h2>
          </div>
      
          <div id="input">
            <InputGroup className="mb-3" style={{'width':'300px','position':'absolute','right':'10px'}}>
              <Form.Control type="text" id="filtro" className='INPUT' value={busca} onChange={(e)=>setBusca(e.target.value)}/>
              <Button variant="outline-secondary" id="buscador" className='BUTTON' onClick={()=>props.cargaT(busca)}>
                Button
              </Button>
            </InputGroup>
          </div>

          <div id="select"> 
            <Form.Select id="selector" aria-label="Default select example"
              name="categoria"
              style={{'width':'300px'}} 
              onChange={(e)=>{props.cargaC(e.target.value);}}>
              <option value='All'>All</option>
              { categorias.map((e,i)=><option value={e} key={i}>{e}</option>) }
            </Form.Select> 
          </div> 
      </div>
    }