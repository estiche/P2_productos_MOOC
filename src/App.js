import * as React from 'react';
import { Routes, Route } from "react-router-dom";

import ProductoId from './productoID';
import {mockdata} from './constants/products'
import SearchPage from './searchpage';


export default function App() {
  let productos = mockdata;
  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/productos/:id" element={<ProductoId productos={productos} />} />
        </Routes>
    </div>
    
  );
  /* <h1>Mis Juegos</h1>
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/">Home</Link> |{' '}
      <Link to="/producctos/peoductoid">Producto</Link> |{' '}
    </nav> */
  
}
