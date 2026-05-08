//console.log("Hello World");

function ParImpar() {

    let nume = parseFloat(prompt("digite um número inteiro: "));
    if (nume % 2 == 0) {
        alert("seu número é par");
        alert("seu número vai ser transformado em ímpar");
        nume += 1;
        alert("agora seu número é " + nume);
    } else {
        alert("seu número é ímpar");
        alert("seu número vai ser transformado em par");
        nume -= 1;
        alert("agora seu número é " + nume);
    }
}