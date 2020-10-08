import React, { Fragment, useState, useEffect } from 'react';

const Pregunta = () => {
    const [cantidad, guardarCantidad] = useState(0);
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupesto"
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