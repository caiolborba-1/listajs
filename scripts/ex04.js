//console.log("Hello World");

function ordem() {

     let numeros = [];
     for (let i = 1; i < 5; i++){
     numeros.push(Number(prompt("informe o valor:" + i)));     
     }
     numeros.sort((a, b) => b - a);
     alert("os números em ordem decrescente são: " + numeros.join(", "));
   
}