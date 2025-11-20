function lerCodigo(codigo) {

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
    }
}
