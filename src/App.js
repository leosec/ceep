import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import { Component } from "react";
import "./assets/App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: [],
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(indice) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1);

    this.setState({ notas: arrayNotas })
  }

  novaCategoria(valorCategoria) {
    const novoArayCategorias = [...this.state.categorias, valorCategoria];
    const novoEstadoCat = { categorias: novoArayCategorias };
    this.setState(novoEstadoCat);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias} //Associação dinamica de categorias no formulário de cadastro
          criarNota={this.criarNota.bind(this)}
        />
        <main className="conteudo-principal">

          <ListaDeCategorias
            adicionarCategoria={this.novaCategoria.bind(this)}
            categorias={this.state.categorias}
          />

          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />

        </main>
      </section>
    );
  }
}



export default App;