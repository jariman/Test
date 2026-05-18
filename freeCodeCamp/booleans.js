const espectadores = 45000;
const juegaEspana = true;
const vaAlCanalPrincipal = espectadores >= 50000 || juegaEspana === true;

console.log(vaAlCanalPrincipal);

const velocidad = 100;
const altitud = 2500;
const activarAlarmaStall = velocidad <= 200 && altitud <= 3000;

console.log(activarAlarmaStall);

const bateriaDanada = false;
const esSeguroCargar = !bateriaDanada;
console.log(esSeguroCargar);
