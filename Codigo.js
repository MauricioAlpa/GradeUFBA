class Codigo {
    #codigo
    #dias
    #turnos
    #horarios

    constructor(codigo) {
        this.#codigo = codigo.split('')
        this.#dias = [];
        this.#turnos = [];
        this.#horarios = [];

        this.leitorCodigo();
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

    leitorCodigo() {
        let passLetter = false;

        for(let i = 0; i < this.#codigo.length; i++) {

            const char = this.#codigo[i];

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

let c = new Codigo("12MT45")

console.log(c.toString())

