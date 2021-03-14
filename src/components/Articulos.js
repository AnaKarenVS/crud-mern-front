import React, { Component } from 'react';

class Articulos extends Component {

    state = {
        contador: 0
    }

    sumar = (e) => {
        // this.contador = this.contador+1;
        this.setState({
            contador: (this.state.contador + 1)
        });
    }
    restar = (e) => {
        // this.contador = this.contador-1;
        this.setState({
            contador: (this.state.contador - 1)
        });
    }
    render() {
        return (
            <div id="articles">
                <article className="article-item" id="article-template">
                    <div className="image-wrap">
                        <img src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8" alt="Paisaje" />
                    </div>


                    <h2>Articulo de prueba</h2>
                    <span className="date">
                        Hace 5 minutos
                        </span>
                    <a href="/">Leer más</a>

                    <div className="clearfix"></div>
                </article>

                <p>Contador: </p>
                <p>{this.state.contador} </p>

                <input type="button" value="+" onClick={this.sumar} />
                <input type="button" value="-" onClick={this.restar} />

            </div>
        );
    }



}

export default Articulos;