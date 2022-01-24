export default class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    novaCategoria(valorCategoria) {
        this.categorias.push(valorCategoria);
        this.notificar();
    }

    
    //Padrão Observable
    inscrever(func){
        this._inscritos.push(func);
    }

    //Padrão Observable
    desinscrever(func){
        console.log(this._inscritos.length)
        this._inscritos = this._inscritos.filter(f => f !== func);
        console.log(this._inscritos.length)
    }

    //Padrão Observable
    notificar(){
        this._inscritos.forEach(func =>{
            func(this.categorias);
        } );
    }
}