import * as React from 'react';
import "./App_copy.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductoId from './productoID';

import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { mockdata } from './constants/products';


export default function App() {
  const [productos, setProductos]= useState(null);
 
  function cargaProductos(){
    setProductos(mockdata.products);

  }
 
  return (
    <div className='App'>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home productos={productos} carga={cargaProductos}/>} />
          <Route path="/productos/:id" element={<ProductoId productos={productos} carga={cargaProductos}/>}  />           
        </Routes>
    </BrowserRouter>
    </div>
    
  );
  
  
}
