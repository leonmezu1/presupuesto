import React, { useState, useEffect } from 'react';

const Formulario = () => {
    return (
        <form>
            <h2>Coloca tus gastos aqui</h2>
            <div className="campo">
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />

            </div>
        </form>

    );
}

export default Formulario;