function perguntarPeso() {
    
    let peso = 0;
    let altura = 0;

    peso = prompt("Qual seu peso?");
    altura = prompt("Qual sua altura em metros?");

    imc1 = altura * altura
    imc2 = peso / imc1

    let resposta = window.document.getElementById('valorImc');

    if (imc2 < 18,5) {
    resposta.innerHTML += "<p>Considerando seu peso de " + peso + "kg e sua altura de " + altura + "m, você está abaixo do peso.<p>";
    } else if (18,51 < imc2 > 24,99) {
    resposta.innerHTML += "<p>Considerando seu peso de " + peso + "kg e sua altura de " + altura + "m, você está no peso normal.<p>";
    } else if (25 < imc2 > 29,99) {
    resposta.innerHTML += "<p>Considerando seu peso de " + peso + "kg e sua altura de " + altura + "m, você está acima do peso.<p>";
    } else if (imc2 < 30) {
    resposta.innerHTML += "<p>Considerando seu peso de " + peso + "kg e sua altura de " + altura + "m, você é obeso.<p>";
    }

}