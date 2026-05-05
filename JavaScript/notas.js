const notas = []

notas.push(7, 4, 9, 10, 5, 3)

console.log(notas.length)

function media (half){

    let suma = 0
    
    for (let i = 0; i < half.length; i++){
        suma = suma + half[i]
    } 
    return suma / half.length
}

function high (half){

    let mayor = half[0]

    for(let i = 0; i < half.length; i++){

        if(mayor < half[i]){
            mayor = half[i]
        }
    }
    return mayor
}


function low (half){

    let menor = half[0]

    for(let i = 0; i < half.length; i++){

        if(menor > half[i]){
            menor = half[i]
        }
    }
    return menor
}

function approved (half){

    
    
}


console.log(media(notas))

console.log(high(notas))

console.log(low(notas))