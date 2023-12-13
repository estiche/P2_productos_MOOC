import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Tictactoe from './TicTacToe';
import Peoducto from './Peoducto';
import Home from './home';


export default function App() {
  return (
    <div className='App'>
      <h1>Mis Juegos</h1>
        <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
          <Link to="/">Home</Link> |{' '}
          <Link to="/producctos/peoductoid">Producto</Link> |{' '}
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producctos/peoductoid" element={<Producto/>} />
      </Routes>
    </div>
  );
}
