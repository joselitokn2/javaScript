
function fibonacci(numero){ 

    if(( numero == 0 )  || (numero == 1)){
        return numero;
    }
    return fibonacci(numero-1) + fibonacci(numero-2);
}

console.log(fibonacci(3)); //3
console.log(fibonacci(6)); //8