import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta guardarPresupuesto={guardarPresupuesto} guardarRestante={guardarRestante}/>
          <div className="row">

          </div>
          </div>
      </header>
    </div>
  );
}

export default App;
