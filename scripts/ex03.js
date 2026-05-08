//console.log("Hello World");


function salario() {

    let gastot = 0;
    let gasto = 0;
    let soma = 0;
    let ganho = 0;
    let saldo = 0;

    for (let i = 1; i <= 12; i++) {

        let ganho = parseFloat(prompt("informe os seus ganhos do mês " + i));
        if (!isNaN(ganho)) {
            soma += ganho;

            let gasto = parseFloat(prompt("informe os seus gastos do mês " + i));
            gastot += gasto;


        } else {
            alert("digite um número válido");
        }

        console.log(soma);
        console.log(gastot);

    }

    saldo = soma - gastot;
    prompt("o seu saldo no final do ano é de " + saldo);

    if (saldo < 0){
        prompt("você ficou no prejuízo");
    }else{
        prompt("você teve lucro");
    }

}