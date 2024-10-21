function perguntarPeso() {

    peso = prompt("Qual seu peso?");
    altura = prompt("Qual sua altura em metros?");

    let imc = peso / (altura * altura);

    let resposta = window.document.getElementById('valorImc');

    if(imc < 18.5) {
    resposta.innerHTML += "<p>Considerando seu peso de <b>" + peso + "kg</b> e sua altura de <b>" + altura + "m</b>, você possui um IMC de <b>" + imc.toFixed(1) + "</b>, significando que está ABAIXO DO PESO COMUM com base na tabela de IMC.<p>";
    } else if (imc > 18.6 && imc < 24.9) {
    resposta.innerHTML += "<p>Considerando seu peso de <b>" + peso + "kg</b> e sua altura de <b>" + altura + "m</b>, você possui um IMC de <b>" + imc.toFixed(1) + "</b>, significando que está PESANDO NORMALMENTE com base na tabela de IMC.<p>";
    } else if (imc > 25 && imc < 29.9) {
    resposta.innerHTML += "<p>Considerando seu peso de <b>" + peso + "kg</b> e sua altura de <b>" + altura + "m</b>, você possui um IMC de <b>" + imc.toFixed(1) + "</b>, significando que está com EXCESSO DE PESO com base na tabela de IMC.<p>";
    } else if (imc > 30 && imc < 34.9) {
    resposta.innerHTML += "<p>Considerando seu peso de <b>" + peso + "kg</b> e sua altura de <b>" + altura + "m</b>, você possui um IMC de <b>" + imc.toFixed(1) + "</b>, significando que VOCÊ POSSUI OBESIDADE com base na tabela de IMC.<p>";
    } else if (imc > 35) {
    resposta.innerHTML += "<p>Considerando seu peso de <b>" + peso + "kg</b> e sua altura de <b>" + altura + "m</b>, você possui um IMC de <b>" + imc.toFixed(1) + "</b>, significando que POSSUI OBESIDADE EXTREMA com base na tabela de IMC.<p>";
    }
}