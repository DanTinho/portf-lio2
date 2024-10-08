var númeroDeInscritos = 0;

function InscreverAluno() {

    númeroDeInscritos++;

    aluno = prompt("Qual seu nome?");
    idadeAluno = parseInt(prompt("Qual sua idade?"));

    let resposta = window.document.getElementById('alunoNome');
    let respostaIdade = window.document.getElementById('alunoIdade');


    if(resposta){
        resposta.innerHTML += "<p>" + aluno + "</p>";
        respostaIdade.innerHTML += "<p>" + idadeAluno + "</p>";
    } 
}

function CalcularTimes() {

    let quantidadeDeTimes = parseInt(númeroDeInscritos / 3);
    let resposta2 = window.document.getElementById('respostaTimes');
    let sobra = númeroDeInscritos % 3

    if (sobra === 0) {
        resposta2.innerHTML = "A quantidade de times formados é " + quantidadeDeTimes + ". E nenhum aluno sobrará.";
        window.document.getElementById('respostaTimes').style.color = 'green';
    } else {
        resposta2.innerHTML = "A quantidade de times formados é " + quantidadeDeTimes + ". Sobrarão " + sobra + " alunos.";
        window.document.getElementById('respostaTimes').style.color = 'red';
    }
    
}