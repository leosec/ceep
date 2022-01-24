import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

export default class ListaDeNotas extends Component {

    constructor() {
        super();
        this.state = { notas: [] }

        this._ReferenciaNovaNota = this._novasNotas.bind(this);
    }
    componentDidMount() {
        this.props.notas.inscrever(this._ReferenciaNovaNota);
    }

    componentWillUnmount(){
        this.props.notas.desinscrever(this._ReferenciaNovaNota);
    }

    _novasNotas(notas) {
        this.setState({ ...this.state, notas });
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.state.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota
                                indice={index}
                                apagarNota={this.props.apagarNota}
                                titulo={nota.titulo} texto={nota.texto}
                                categoria={nota.categoria} />
                        </li>
                    );
                })}

            </ul>
        );
    }
}