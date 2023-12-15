import * as React from 'react';
import "./App_copy.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductoId from './productoID';
import Header from './header';
import Home from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default function App() {
 
 
  return (
    <div className='App'>
    <Header />
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/:id" element={<ProductoId />}  />           
        </Routes>
    </BrowserRouter>
    </div>
    
  );
  
  
}
