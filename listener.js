import {readCode, verifyCode} from "./functions.js";

const displayCode = document.getElementById("codigo-horario");
const codeButton = document.getElementById("btn-adicionar");
const displayClass = document.getElementById("nome-materia")

codeButton.addEventListener("click", () => {
    let codigo = verifyCode(displayCode.value);
    for(let c of codigo){
        let result = readCode(c);
        for(let r of result){
            let cel = document.getElementById(r);
            cel.innerText = displayClass.value;
        }
    }
})