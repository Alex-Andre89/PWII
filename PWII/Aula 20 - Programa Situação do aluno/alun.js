function calcularMedia() {
  
    var nomeAl = document.getElementById("nomeAl");
    var alNota1 = document.getElementById("alNota1");
    var alNota2 = document.getElementById("alNota2");
    var alSituacao = document.getElementById("alSituacao");
    var alMedia = document.getElementById("alMedia");

    var nome = nomeAl.value;
    var nota1 = Number(alNota1.value);
    var nota2 = Number(alNota2.value);

    var media = (nota1 + nota2) / 2;

    alMedia.textContent = "Média das Notas: " + media.toFixed(1);

    if (media >= 7) {
      
        alSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)!";
        alSituacao.style.color = "blue";
    } else {
        alSituacao.textContent = "Ops " + nome + "... Você foi reprovado(a)!";
        alSituacao.style.color = "red";
    }
}
var Resultado = document.getElementById("Resultado");
Resultado.addEventListener("click", calcularMedia);