import React, { Component } from 'react';

class MiComponente extends Component {
    render() {
        let receta = {
            nombre: ' Pizza',
            ingredientes: ['Jamon', 'Tocino', 'Pepperoni', 'Queso'],
            calorias: 500
        };
        return (
            <React.Fragment>
                <p>{'La' + receta.nombre + ' tiene ' + receta.calorias + ' calorias.'} </p>
                <p>Soy el comentario 2</p>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
            </React.Fragment>

        );
    }
}

export default MiComponente;