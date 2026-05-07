let char = String.fromCharCode(97);
console.log(char);  // a

console.log(String.fromCharCode(66)); //B

let name = 'Javier Martinez'
let result = name.includes('Martinez')
console.log(result) //true

let name2 = 'Javier Martinez'
let result2 = name2.includes('martinez')
console.log(result2) //false

let name3 = 'Javier Martinez'
let result3 = name3.includes('Martinez', 3)
console.log(result3) // true

let message = 'Aupa el Haro'
let result4 = message.slice(0,8)
console.log(result4) //Aupa el

let message2 = 'Aupa el Haro'
let result5 = message.slice(-4)
console.log(result5) //Haro