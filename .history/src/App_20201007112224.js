import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Pregunta from './components/Pregunta';

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [pregunta, mostrarPregunta] = useState(true)
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta guardarPresupuesto={guardarPresupuesto} guardarRestante={guardarRestante}/>
          <div className="row">
            <div className="one-half column">
              <Formulario />
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
