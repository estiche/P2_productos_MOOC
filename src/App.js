import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductoId from './productoID';

import SearchPage from './searchpage';
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
          <Route path="/" element={<SearchPage productos={productos} carga={cargaProductos}/>} />
          <Route path="/productos/:id" element={<ProductoId productos={productos}/>}  />           
        </Routes>
    </BrowserRouter>
    </div>
    
  );
  
  
}
