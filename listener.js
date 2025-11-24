import {readCode, verifyCode} from "./functions.js";

const displayCode = document.getElementById("codigo-horario");
const codeButton = document.getElementById("btn-adicionar");
const displayClass = document.getElementById("nome-materia");
const clearButton = document.getElementById("btn-limpar")
var arrayClass = [];


codeButton.addEventListener("click", () => {
    let codigo = verifyCode(displayCode.value);//24M45 24T45
    for(let c of codigo){
        let result = readCode(c);
        arrayClass.push(result);

        for(let r of result){
            let cel = document.getElementById(r);
            cel.innerText = displayClass.value;
        }
    }
})


clearButton.addEventListener("click", () => {
    console.log(arrayClass)
    for(let i = 0; i < arrayClass.length; i++){
        for(let j =0; j < arrayClass[i].length; j++){
            let cCel = document.getElementById(arrayClass[i][j]);
            console.log(cCel);
            cCel.innerText = "";
        }
    }
})
