function mostrarPromocao() {
 
    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

  
    var promocao = Math.floor(preco * 2);

  
    outMedicamento.textContent = "Promoção de " + medicamento;
    outPromocao.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPromocao);