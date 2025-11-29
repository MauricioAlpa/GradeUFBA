import {readCode, verifyCode} from "./functions.js";

const displayCode = document.getElementById("codigo-horario");
const codeButton = document.getElementById("btn-adicionar");
const displayClass = document.getElementById("nome-materia");
const clearButton = document.getElementById("btn-limpar");
var arrayResult = [];
var result = [];
var cel;

codeButton.addEventListener("click", () => {
    let codigo = verifyCode(displayCode.value);
    for(let c of codigo){
        result = readCode(c);
        arrayResult.push(result);
        for(let r of result){
            cel = document.getElementById(r);
            cel.innerText = displayClass.value;
        }
    }
})

clearButton.addEventListener("click", () => {
    for(let i = 0; i < arrayResult.length; i++){
        for(let j = 0; j < arrayResult[i].length; j++){
            cel = document.getElementById(arrayResult[i][j]);
            cel.innerText = ""
        }
    }
    result = [];
    arrayResult = [];
})