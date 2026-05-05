//Dado un array de N elementos, quiero en consola que cuando sea multiplo de 3 me imprima Fizz 
// y cuando sea múltiplo de 5 me imprima Buzz y cuando sea múltiplo de ambos me imprima FizzBuzz

function setNumbers(num){
    const numbers = []
    for (let i = 1; i <= num; i++){
    numbers.push(i)
    }
    return numbers
}

function Fizz (num){
    if(num % 3 === 0){
    return true   
    }else{
    return false
    }
}

function Buzz (num){
    if(num % 5 === 0){
    return true
    }else{
    return false
    }
}


function checkNum (array){
    for (let i = 0; i <= array.length; i++){

        if (Fizz (i) && Buzz (i)){
            console.log("FizzBuzz " + i)
    
        }if (Fizz (i) && !Buzz(i)){
            console.log("Fizz " + i)

        }if (!Fizz (i) && Buzz(i)){
            console.log("Buzz " + i)

        }if (!Fizz (i) && !Buzz(i)){
            console.log(i)
            
        } 
    }
}
const value = setNumbers (1000)

console.log(checkNum(value))