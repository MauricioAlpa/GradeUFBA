function lerCodigo(codigo) {
    const regexC = /[a-z]/i;
    codigo.split("")
    let passLetter = false;

    for(char of codigo){
        if(!passLetter){
            if(regexC.test(c)){
                
                passLetter = true;
            } else {

            }
        }
    }

}

function verificarCodigo(codigo) {
    const regex = /\s/;
    var codigos
    codigo = codigo.trim();

    if(regex.test(codigo)) {
        codigos = codigo.split(/\s+/);
        for(let c of codigos){
            lerCodigo(c);
        }
    } else {
        lerCodigo(codigo);
    }
}
