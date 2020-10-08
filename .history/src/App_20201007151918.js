import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [pregunta, mostrarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {pregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              mostrarPregunta={mostrarPregunta}
            />
          ) : null}
          <div className="row">
            <div className="one-half column">
              <Formulario gastos={gastos} guardarGastos={guardarGastos}/>
            </div>
            <div className="one-half column">
              <Listado gastos={gastos}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
