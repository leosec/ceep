import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {

    
    _handleEventoInput(e){
        if(e.key == "Enter"){
            return (console.log(e.target.value));
        }
    }

    
    render() {

        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">Categoria 1</li>
                    <li className="lista-categorias_item">Categoria 1</li>
                    <li className="lista-categorias_item">Categoria 1</li>
                    <li className="lista-categorias_item">Categoria 1</li>
                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adcionar Categoria..."
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </ section>
        );
    }
}

export default ListaDeCategorias;