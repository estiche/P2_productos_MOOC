import * as React from 'react';
import "./App_copy.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Location from './Location';
import SearchPage from './SearchPage';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CONFIG from "./config/config";
import { mockdata } from "./constants/products";
import NoMatch from './nomach';

export default function App() {
  
  const [err, setErr]= useState(null);
    
  async function cargaDatos(){
    let productos;
      if(CONFIG.use_server){
        try{
          const response = await fetch(`${CONFIG.server_url}`)
          const datos = await response.json();
        if(response.status === 200){
          productos=datos;
        }else{
            setErr(datos);
        }
      }catch(e){
        setErr({"cod":e.cod , "message":"la conexion fallo"})
      }  
    }else{
      setTimeout(()=>
        productos=mockdata,CONFIG.loading_timeout_ms);
    }
    return productos.products;
};


return (
    <div className='App'>
    
        <Routes>
          <Route path="/" element=<SearchPage products={cargaDatos} error={err} /> />

          <Route path="/productos/:id" element=<Location products={cargaDatos} 
          error={err}/>/>
          
          <Route path='/rutanoexiste' element=<NoMatch />/>
        </Routes>
    
    </div> 
  );         
  }
