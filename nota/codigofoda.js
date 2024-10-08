//declaração de variáveis
let notaPrimeiroTrimestre;
let notaSegundoTrimestre;
let notaTotal;
let quantoPrecisa;

//entrada de dados pelo usuário
notaPrimeiroTrimestre = parseInt(prompt("Qual foi a sua nota no primeiro trimestre?"));
notaSegundoTrimestre = parseInt(prompt("Qual foi a sua nota no segundo trimestre?"));

//conta de quanto precisa
notaTotal = notaPrimeiroTrimestre + notaSegundoTrimestre;
quantoPrecisa = 180 - notaTotal;
if(notaTotal >= 180) (
    alert("Parabéns, por ter passado de ano!!!")
);
else if(notaTotal << 180) (
    alert("Você precisa de " + quantoPrecisa)
);
