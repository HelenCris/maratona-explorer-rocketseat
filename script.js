const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
];


function fazerPergunta() {

    if (inputPergunta.value == "") {
        alert("Digite sua pergunta")
        return 
    };

    const pergunta = "div" + inputPergunta.value + "</div>"

    // gerar numero aleatorio
    const totalRespostas = respostas.length;
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

    console.log(respostas[numeroAleatorio]);

    elementoResposta.innerHTML = respostas[numeroAleatorio];


    // sumir a resposta depois de 3 segundos
    setTimeout(function() {
        elementoResposta.style.opacity = 0;
    }, 3000);
};
