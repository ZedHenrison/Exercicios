const number1 = Number(window.prompt("Digite o primeiro número !"))

const number2 = Number(window.prompt("Digite o segundo número !"))

const soma = number1 + number2

sum = () => {

    somando = number1 + number2
    return alert(`A soma é ${somando}`)
}

subtra = () => {

    subtracao = number1 - number2
    return alert(`A subtração é ${subtracao}`)
}

multipli = () => {

    multiplica = number1 * number2

    return alert(`A multiplicação é ${multiplica}`)
}

divi = () => {

    divisao = number1 / number2
    return alert(`A divisão é ${divisao}`)
    
}

resto = () => {

    restoDiv = number1 % number2
    return alert(`O resto da divisão é ${restoDiv}`)
   
}

resultSoma = () => {

    result = soma
    if (result % 2 == 0) {
        return alert(`A soma é um numero par`)
    } else {
        alert(`A soma é um número impar`)
    }
}

igual = () => {

    a = number1
    b = number2
    if ( a === b){
       return alert(`Os números inseridos são iguais`)
    } else { 
        alert("Os números inseridos são diferentes")
    }
}

sum()

resultSoma ()

subtra()

multipli()

divi()

resto()

igual ()

