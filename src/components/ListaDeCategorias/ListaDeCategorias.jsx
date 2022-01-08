import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">Categoria 1</li>
                    <li>Categoria 2</li>
                    <li>Categoria 3</li>
                    <li>Categoria 4</li>
                </ul>
                <input type="text" className="lista-categorias_input" placeholder="Crie uma nota..." />
            </ section>
        );
    }
}

export default ListaDeCategorias;