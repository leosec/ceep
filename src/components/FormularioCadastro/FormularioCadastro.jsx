import { Component } from "react";
import "./estilo.css";

export default class FormularioCadastro extends Component {
    
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
        //this.categoria = "";
        this.state = {categorias:[]}

        this._ReferenciaNovaCategoria = this._novasCategorias.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._ReferenciaNovaCategoria);
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._ReferenciaNovaCategoria);
    }

    _novasCategorias(categorias){
        this.setState({...this.state,categorias});
    }

    _handleMudancaCategoria(evento){
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }
    

    _hendleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo,this.texto, this.categoria);
    }

    render() {
        return (
            <form className="form-cadatro" onSubmit={this._criarNota.bind(this)}>
                <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro_input">
                    <option>Sem Categoria</option>
                    {this.state.categorias.map((categoria, index) => {
                        return (
                            <option key={index}>{categoria}</option>
                        );
                    })}
                </select>
                <input type="text" required placeholder="Título" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)} />
                <textarea placeholder="Escreva sua nota..." required rows={15} className="form-cadastro_input" onChange={this._hendleMudancaTexto.bind(this)}/>
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        );
    }
}