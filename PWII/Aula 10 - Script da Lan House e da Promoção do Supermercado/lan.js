function LanHouse() {

    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outPagar = document.getElementById("outPagar");

    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);
  
    var pagar = Math.ceil(tempo / 15) * valor;
  
    outPagar.textContent = "Valor a Pagar R$: " + pagar.toFixed(2) + " ! ";
  }
 
  var btCalcular = document.getElementById("btCalcular");
  btCalcular.addEventListener("click", LanHouse);