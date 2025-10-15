class Codigo {
    #codigo

    constructor(codigo) {
        this.#codigo = codigo.split('')
    }

    get codigo(){
        return this.#codigo;
    }
}

class Tradutor {
    
}

const c = new Codigo("12M45")
console.log(c.codigo)