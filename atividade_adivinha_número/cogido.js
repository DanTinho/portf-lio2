let tentativa = 0;
let min = 1;
let max = 100;
let dif= max - min;
let aleatorio = Math.random();
let resultado = min + Math.trunc(dif * aleatorio);

function AdivinhaNumero() {
    tentativa = prompt("Digite a sua tentativa:");

    let resposta = window.document.getElementById('tentativas');
  
    if(tentativa == resultado){
        resposta.innerHTML += "<p>Parabéns, o número que eu pensei é esse: " + resultado + ".<p>";
        document.getElementById('botao').style.visibility = 'hidden';
    } else if(tentativa < min){
        resposta.innerHTML += "<p>Digite um número maior que <b>1</b>.<p>"
    } else if(tentativa < resultado){
        resposta.innerHTML += "<p>Você falou " + tentativa + ". Meu número é <b>MAIOR</b><p>";
    } else if(tentativa > max){
        resposta.innerHTML += "<p>Digite um número menor que <b>100</b>.<p>";
    } else if(tentativa > resultado){
        resposta.innerHTML += "<p>Você falou " + tentativa + ". Meu número é <b>MENOR</b><p>";
    } 
}


