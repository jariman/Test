const numbers = []

function setNumbers (num){
    const numbers = []
    for(let i = 0; i <= num; i++){
    numbers.push(i)
    }
    return numbers
}

function pares (array){

    const numbers = []
    for(let i = 0; i <= array.length; i++){

    if (i % 2 === 0){
    console.log (i + " Numero par")}

    else{
    console.log (i + " Numero impar")    
}
}
}








const value = (setNumbers(100))

console.log(pares(value))