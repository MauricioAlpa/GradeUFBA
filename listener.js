import {readCode, verifyCode} from "./functions.js";

const displayCode = document.getElementById("codigo-horario");
const codeButton = document.getElementById("btn-adicionar");
const displayClass = document.getElementById("nome-materia");
const clearButton = document.getElementById("btn-limpar");
const saveButton = document.getElementById("btn-salvar")
var arrayResult = [];
var result = [];
var cel;

codeButton.addEventListener("click", () => {
    let codigo = verifyCode(displayCode.value.toUpperCase());
    for(let c of codigo){
        result = readCode(c);
        arrayResult.push(result); //Array para armazenar os ids para futura manipulacao
        for(let r of result){
            cel = document.getElementById(r);
            cel.innerText = displayClass.value;
        }
    }
    displayClass.value = "";
    displayCode.value = "";
})

clearButton.addEventListener("click", () => {
    for(let i = 0; i < arrayResult.length; i++){
        for(let j = 0; j < arrayResult[i].length; j++){
            cel = document.getElementById(arrayResult[i][j]);
            cel.innerText = "";
        }
    }
    result = [];
    arrayResult = [];
})

saveButton.addEventListener("click", () => {
    console.log("botão")
    const grade = document.querySelector(".grade-container");
    console.log(grade)
    var opt = {
        margin:       1,
        filename:     'GradeUfba.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };


    html2pdf().set(opt).from(grade).save();
});