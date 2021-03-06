import React, { useState, useEffect } from 'react';

const Formulario = () => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    return (
        <form>
            <h2>Coloca tus gastos aqui</h2>
            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />

            </div>
            <div className="campo">
                <label>Cantidad del gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
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