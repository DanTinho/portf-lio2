//declaração de variáveis
let dataNascimento;
let anoAtual;
let resultado;
let idadeCachorro;
let nome;
let qualCalculo;

//entrada de dados pelo usuário
nome = prompt("Qual o seu nome?");
dataNascimento = parseInt(prompt("Qual o ano de nascimento?"));
anoAtual = parseInt(prompt("Qual o ano atual?"));

//primeiro desafio(cálculo idade real)
resultado = anoAtual - dataNascimento;

//segundo desafio(cálculo idade de cachorro)
idadeCachorro = resultado * 7;

//terceiro desafio(saber o nome do usuário)

//quarto desafio(perguntar qual cálculo o usuário quer)
qualCalculo = parseInt(prompt("Digite 1 para a idade humano e 2 para a idade canina"));

//mostra o resultado
if(qualCalculo == 1)(
alert(nome + ", a sua idade é: " + resultado)
);
else if(qualCalculo == 2)(
alert(nome + ", a sua idade em anos canino é: " + idadeCachorro)
); else (
    alert(nome + ", por favor digite um número válido")
);

//DESAFIO ULTIMATO SLA//
//Fazer uma calculadora que verifica quantos pontos um estudande precisa para passar de ano no último trimestre.
//Dicas: do estudante precisa informasr as notas do primeiro e segundo trimestre.

