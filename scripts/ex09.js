//console.log("Hello World");

function ordenacao(){
    let a = 5;
    let b = 10;
    let maior;
    let menor;

    if (a > b){
        maior = a;
        menor = b;
    } else {
        maior = b;
        menor = a;
    }

    console.log("O número maior é: " + maior + ", o número menor é: "+ menor);
}