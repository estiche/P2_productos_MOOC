import * as React from 'react';
import "./App_copy.css"

import 'bootstrap/dist/css/bootstrap.min.css';
/* import ProductoId from './productoID'; */
import Location from './Location';

import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState} from 'react';
import CONFIG from "./config/config";
import {mockdata} from "./constants/products";


export default function App() {
 
  const [productos, setProductos]= useState(null);
  const [err, setErr]= useState(null);
  
  async function  ObtenerDatos(){
    console.log('PASO')
    if(CONFIG.use_server){
    try{
            const response = await fetch(`${CONFIG.server_url}`);
            const datos = await response.json();
            if(response.status === 200){  
              setProductos(datos)
            }else{
              setErr(datos);
              setProductos(null);
              }
    }catch(e){
      setProductos(null);
      setErr({"cod":e.cod , "message":"la conexion fallo"})
      }  
  }else{
    setTimeout(()=>setProductos(mockdata.products),2000);;
    }
  
}

ObtenerDatos();

  return (
    <div className='App'>
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  data={productos} error={err}/>} />
          <Route path="/productos/:id" element={<Location  data={productos} error={err}/>}  /> */         
        </Routes>
    </BrowserRouter>
    </div>
    
  );         
  
  
  }
