const numbers = []

for (let i = 0; i < 10; i++){

    numbers.push(i) //Da 10 numeros a la array
}

console.log(numbers)

for (let i = 0; i < numbers.length; i++){ //Pasa por toda la array
    console.log(numbers[i])

}

for (let i = 0; i < numbers.length; i++){ //Indica los numeros pares de la array
    if (numbers[i] % 2 === 0){

    console.log(numbers[i])
    }
}

for (let i = 0; i < numbers.length; i++){ //Indica los numeros pares/impares de la array
    if (numbers[i] % 2 === 0){

    console.log(numbers[i] + " Numero par")
    }else {
        console.log(numbers[i] + " Numero impar")
    }
}

function esPar(num){
    if (num % 2 === 0){
        return true

    }else{
        return false
    }
}

for (let i = 0; i < numbers.length; i++){
    if (esPar(numbers[i])){
    console.log(numbers[i] + " Numero par")
    }else {
        console.log(numbers[i] + " Numero impar")
    }
}