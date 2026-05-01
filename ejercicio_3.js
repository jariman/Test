//Dado un array de N elementos, quiero en consola que cuando sea multiplo de 3 me imprima Fizz 
// y cuando sea múltiplo de 5 me imprima Buzz y cuando sea múltiplo de ambos me imprima FizzBuzz

function setNumbers (num){ //Crea una array de (num)
    const numbers = []
    for (let i = 1; i <= num; i++){
    numbers.push(i)  
    }
    return numbers
}
function Fizz (num){
    if(num % 3 === 0){
    return true
    } else{      
    return false  
    }
}
function Buzz (num){
    if(num % 5 ===0){
    return true
    }else{
    return false
    }
}

function FizzBuzz (array){
    for (let i = 0; i < array.length; i++){
        if(Fizz(i)){
            console.log("Fizz " + i)
        }
        if(Buzz(i)){
            console.log("Buzz " + i)
    }
    }
}

const cien = setNumbers(100)


console.log(FizzBuzz(cien))