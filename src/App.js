import * as React from 'react';
import "./App_copy.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Location from './Location';
import SearchPage from './SearchPage';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import CONFIG from "./config/config";
import { mockdata } from "./constants/products";
import NoMatch from './nomach';
import Espera from './espera';

export default function App() {
  
  const [err, setErr]= useState(null);
  const [productos, setProductos]= useState(null);
  
  if(!productos){cargaDatos()};
  async function cargaDatos(){
      if(CONFIG.use_server){
        try{
            const response = await fetch(`${CONFIG.server_url}`)
            const datos = await response.json();
          if(response.status === 200){
            setProductos(datos.products);
          }else{
            setErr(datos);
          }
        }catch(e){
          setErr({"cod":e.cod , "message":"la conexion fallo"})
        }  
      }else{
      setTimeout(()=>setProductos(mockdata.products),CONFIG.loading_timeout_ms)
    }
    
};


return (
    <div className='App'>
    {productos?
        <Routes>
          <Route path="/" element=<SearchPage theproducts={productos} error={err} />/>
          <Route path="/products/:id" element=<Location theproducts={productos} error={err}/>/>
          <Route path='/rutanoexiste' element=<NoMatch />/>
        </Routes>
      :
      <Espera></Espera>
    }
    </div> 
  );         
  }
