function mostrarPromocao () {
    //Cria refência aos elementos manipulados pelo programa
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    //Obtém o conteúdo dos campos de entrada
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);

    //calcula valor de entrada e das parcelas
    var entrada = preco * 0.50;
    var parcela = (preco * 0.50)/12;

    //alteta o conteúdo dos parágrafos de resposta
    outVeiculo.textContent = "Promoção " + veiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = " + 12x de R$: " + parcela.toFixed(2);

}
    //cria uma referência ao elemento btVerPromocao (botao)
    var btVerPromocao = document.getElementById("btVerPromocao");
    btVerPromocao.addEventListener("click",mostrarPromocao);