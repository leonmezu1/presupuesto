import React, { Fragment, useState, useEffect } from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante}) => {
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    const agregarPresupuesto = e => {
        e.preventDefault();
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return
        }
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error mensaje="El presupuesto es incorrecto" /> : null }
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupesto"
                    onChange={e => {
                        guardarCantidad(parseInt(e.target.value));
                    }}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>

    );
}
 
export default Pregunta;