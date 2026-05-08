//console.log("Hello World");

function pagamento(){
    let nome = prompt("informe seu nome: ");
    let salario = parseFloat(prompt("informe seu salario bruto: "));
    let liquido = salario - (salario*0.08);

    alert("Olá, "+ nome +" seu salário bruto é: "+ salario);
    alert("Com o desconto do inss de 8%, seu salario liquido é: " + liquido);
}