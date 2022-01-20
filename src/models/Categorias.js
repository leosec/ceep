export default class Categorias {
    constructor() {
        this.categorias = [];
    }

    novaCategoria(valorCategoria) {
        this.categorias.push(valorCategoria);
    }
}