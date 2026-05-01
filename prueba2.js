function checkNum (num1){

    if(num1 >= 10){

        return("Tu numero es mayor que 10")
    }
    else{

        return("Tu numero es menor que 10")
    }
    
}

console.log (checkNum(5))

//Array: Puede ser una lista de cualquier tipo de datos

const compras = ["Manzanas", "Peras", "Naranjas"] //La array

console.log(compras[1]) //Que es ese elemento

console.log(compras) //Que hay el la array

console.log(compras.length) // Cuantos elementos hay

compras.push("Platanos") //Quiero anadir algo a la array

console.log(compras[compras.length - 1]) //Caul es mi ultimo elemento

compras.pop() //Quita ultimo elemento de la array

compras[2] = "Fresa" //Modificar elemento de la array

