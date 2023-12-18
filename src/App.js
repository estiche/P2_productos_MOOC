import * as React from 'react';
import "./App_copy.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Location from './Location';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect} from 'react';
import CONFIG from "./config/config";
import {mockdata} from "./constants/products";
import Espera from './espera';

export default function App() {
  let categorias
  const [productos, setProductos]= useState(null);
  const [err, setErr]= useState(null);
  
  if(productos){
    categorias = productos.reduce((acum,e)=>{
      let item= e.category
      if(!acum.includes(item)){
        acum.push(item);
      }
      return acum;
    },[]);
  }
    
useEffect(()=>{
  async function cargaDatos(){
    if(CONFIG.use_server){
      try{
        const response = await fetch(`${CONFIG.server_url}`);
        const datos = await response.json();
        if(response.status === 200){  
            setProductos(datos);
        }else{
            setErr(datos);
            setProductos(null);
        }
      }catch(e){
        setProductos(null);
        setErr({"cod":e.cod , "message":"la conexion fallo"})
      }  
    }else{
      setTimeout(()=>setProductos(mockdata.products),2000);
    }
  };
cargaDatos();
},[]);

  return (
    <div className='App'>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={productos?
            <Home  productos={productos} error={err} categorias={categorias}/>
          :
          <Espera/>}
          />
          <Route path="/productos/:id" element={<Location  data={productos} error={err}/>}/>        
        </Routes>
    </BrowserRouter>
    </div> 
  );         
  }
