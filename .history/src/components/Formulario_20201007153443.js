import React, { useState, useEffect } from "react";
import shortid from "shortid";
import Error from "./Error";

const Formulario = ({ guardarGastos }) => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    guardarGastos(gasto);

    guardarNombre("");
    guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Coloca tus gastos aqui</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o el presupuesto es incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad del gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value))}
        />
      </div>
      <input type="submit" className="button-primary u-full-width" />
    </form>
  );
};

export default Formulario;
