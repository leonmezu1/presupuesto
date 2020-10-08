import React, { useState, useEffect } from 'react';

const Formulario = () => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, agregarError] = useState(false);
    const agregarGasto = e => {
        e.preventDefault();

    }
    return (
        <form onSubmit={agregarGasto}>
            <h2>Coloca tus gastos aqui</h2>
            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />

            </div>
            <div className="campo">
                <label>Cantidad del gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />

            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
            />
        </form>

    );
}

export default Formulario;