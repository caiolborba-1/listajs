//console.log("Hello World");

function cardapio() {
    let escolha = prompt("a - chocolate | b - morango | c - creme | d - manga | e - melancia | f - vanilla ice | g - ceu azul | h - brownie | i - hawaiano").toLowerCase();

    switch (escolha) {
        case "a":
        case "chocolate":
            alert("sabor chocolate, valor R$1,50");
            break;

        case "b":
        case "morango":
            alert("sabor morango, valor R$2,50");
            break;

        case "c":
        case "creme":
            alert("sabor creme, valor R$2,50");
            break;

        case "d":
        case "manga":
            alert("sabor manga, valor R$3,20");
            break;

        case "e":
        case "melancia":
            alert("sabor melancia, valor R$3,40");
            break;

        case "f":
        case "vanilla ice":
            alert("sabor vanilla ice, valor R$3,00");
            break;

        case "g":
        case "ceu azul":
            alert("sabor ceu azul, valor R$3,60");
            break;

        case "h":
        case "brownie":
            alert("sabor brownie, valor R$4,00");
            break;

        case "i":
        case "hawaiano":
            alert("sabor hawaiano, valor R$5,00");
            break;

        default:
            alert("valor inválido!");
    }
}