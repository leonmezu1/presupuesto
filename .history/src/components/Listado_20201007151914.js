import React from 'react';

const Listado = ({gastos}) => {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gastos => (
                
            ))}
        </div>
    );
}

export default Listado;