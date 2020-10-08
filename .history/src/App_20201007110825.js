import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';

function App() {
  const [presupuesto, guardarPresupuesto] = useState([]);
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta />
        </div>
      </header>
    </div>
  );
}

export default App;
