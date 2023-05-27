const listEstud = [ {
    
        nome : "Joao",
        nota1 : 7,
        nota2 : 6

    }, {  
        nome : "Juca",
        nota1 : 7,
        nota2 : 8

    }, {
        nome : "Marica",
        nota1 : 9,
        nota2 : 6

    }
]


function mediaNotas(nota1, nota2) {
   
    return ((nota1 + nota2) / 2)
}

msgResult = (estud) => {

    const nome = estud.nome;
    const nota1 = estud.nota1;
    const nota2 = estud.nota2;
    const media = mediaNotas(nota1,nota2)

    if (media >= 7) {
       return `Parabéns ${nome} sua média é ${mediaNotas(nota1, nota2)} e 
           você passou no concurso!  `
    } else {
       return `${nome}, sua média é ${mediaNotas(nota1, nota2)} e
            infelizmente você não passou no concurso`
    }
}

for (i = 0; i < listEstud.length; i++) {

    estudante = listEstud[i]
    msg = msgResult(estudante)
    alert(msg)
}

/*
listEstud.forEach((estud) => {

    const msg = msgResult(estud)
    alert(msg)

    }
)
*/
