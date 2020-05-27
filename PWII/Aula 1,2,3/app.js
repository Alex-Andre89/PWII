    nome = prompt("Digite o seu nome");
    pessoa = ("Olá, " + nome + "!"+ " Seja bem vindo(a)!");
    document.getElementById("boas").innerHTML = pessoa;

while(nome==null || nome==0) {
    alert("Por favor, digite o seu nome: ");
    nome = prompt("Digite o seu nome");
    pessoa = ("Olá, " + nome + "!"+ " Seja bem vindo(a)!");
    document.getElementById("boas").innerHTML = pessoa;
}