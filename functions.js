function readCode(codigo) {
    let regex = /[a-z]/i;
    let time = []; //23M45= [cell-2-M4, cel]
    let days = [];
    let dayShift = "";
    let passLetter = false;

    for(let char of codigo){
        if (regex.test(char)) { 
            // 1. Se for Letra (M, T, N)
            dayShift = char;
            passLetter = true;
        } 
        else if (!passLetter) { 
            // 2. Se for Número ANTES da letra (Dias)
            days.push(char);
        } 
        else { 
            // 3. Se for Número DEPOIS da letra (Horário)
            time.push(char);
        }
    }
    
    return toString(days, dayShift, time)
}

function verifyCode(codigo) {
    const regex = /\s+/;
    codigo = codigo.trim();
    if(regex.test(codigo)){
        return codigo.split(regex);
    }

    return [codigo];
}

function toString(days, dayShift, time){ //cell-2-N4
    let arrayId = [];
    for(let d of days){
        for(let t of time){
            arrayId.push(`cell-${d}-${dayShift}${t}`);
        }
    }

    return arrayId;
}



export {verifyCode, readCode};
