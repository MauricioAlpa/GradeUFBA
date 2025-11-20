var regex = /\s/g;

class Codigo {
    #dias
    #turnos
    #horarios

    constructor(codigo) {
        if(regex.test(codigo)){
            this.#codigos.push(codigo.split(" "));

        } else {
            this.#codigo = codigo.split("");
        }
        this.#dias = [];
        this.#turnos = [];
        this.#horarios = [];
    }

    get codigo(){
        return this.#codigo;
    }

    get turnos() {
        return this.#turnos;
    }

    get horarios() {
        return this.#horarios
    }

    toString(){
        return `A máteria ${this.#codigo.join('')} acontecera nos dias:${this.#dias}, nos turnos:${this.#turnos}, nos horarios:${this.#horarios}`
    }

    leitorCodigo(codigo) {
        let passLetter = false;

        for(let i = 0; i < codigo.length; i++) {

            const char = this.codigo[i];

            if(isNaN(char)){
                passLetter = true;
                this.#turnos.push(char)
            } else {
                if(!passLetter) {
                    this.#dias.push(char);
                } else {
                    this.#horarios.push(char);
                }
            }
        }
    }
}

let c = new Codigo("12M45 34T45")

console.log(c.toString())

