import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import { Component } from "react";
import "./assets/App.css";
import Categorias from "./models/Categorias";
import ArrayDeNotas from "./models/Notas";

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

 
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias} //Associação dinamica de categorias no formulário de cadastro
          criarNota={this.notas.criarNota}
        />
        <main className="conteudo-principal">

          <ListaDeCategorias
            adicionarCategoria={this.categorias.novaCategoria}
            categorias={this.categorias.categorias}
          />

          <ListaDeNotas
            apagarNota={this.notas.deletarNota}
            notas={this.notas.notas}
          />

        </main>
      </section>
    );
  }
}



export default App;