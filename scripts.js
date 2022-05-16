function ativ01_btn_01(){
    window.alert("Você pressionou o botão 1!");
}

function ativ01_btn_02(){
    window.alert("Você pressionou o botão 2!")
}
 
function ativ01_btn_03(){
    window.alert("Você pressionou o botão 3!")
}

function ativ_02() {
    var nome = window.prompt("Qual é seu nome: ");
    var idade = window.prompt("Qual é sua idade: ");

    window.alert("Acabei de conhecer " + nome + ", que tem " + idade + " anos de idade");

}

function ativ_03() {
    var num = Number (window.prompt("Informe um número: "));
    var antecessor = num - 1;
    var sucessor  = num + 1;

    window.alert("O número informado pelo usuario foi "+ num+ "antes do numero"+ num + " temos o número "+ antecessor + ". Após o número "+ num + ", temos o número " + sucessor)
}

function ativ_04(){
    var nome_prod = window.prompt("Qual é o nome desse produto: ");
    var dindin_preco = Number(window.prompt("Qual o valor do produto: R$"));
    var dindin_maluco = Number(window.prompt("Qual O valor entregue: R$"));

     var troco = dindin_maluco - dindin_preco
    window.alert("Você comprou um produto " + nome_prod + "por R$ 185,00 e entregou ao vendedor " + dindin_maluco.toFixed(2) + " em dinheiro. Você vai receber R$" + troco.toFixed(2) + " de troco. Volte sempre!" );
}

function ativ_05(){
    var celso = window.prompt("Digite lá uma temperatura em celcios: °");
    var fahrenheit = celso * 9 / 5 + 32;

    window.alert("Esta tempera tura em graus fahrenheit é "+fahrenheit + "ºF");

}

function ativ_06(){
    var valor_reais = Number (window.prompt("Informe o valor em reais: "));
    var cotacao_dolar = Number(window.prompt("Informe a cotação do dolar: "));

    var valor_dolar = valor_reais / cotacao_dolar;

    window.alert("CARCULE")

    document.getElementById("resultado"). innerHTML = "Você tem R$ "+ valor_reais.toFixed(2) + ". A cotação do dolar é "+cotacao_dolar.toFixed(2) + " Você têm " + valor_dolar.toFixed(2);
}

function ativ_07(){
    
}