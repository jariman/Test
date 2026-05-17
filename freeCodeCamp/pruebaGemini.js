const busquedaUsuario = "   mBaPpÉ   ";

const busquedaUsuarioLimpia = busquedaUsuario.trim();

const busquedaLimpia = busquedaUsuarioLimpia.toLowerCase();

const busquedaValida = busquedaLimpia.includes("mbappé");

console.log(busquedaValida);

const mensajeRadio =
  "Enemigo aproximándose por el flanco norte en dirección a la base.";

const interferencia = mensajeRadio.slice(0, 10);

const mensajeFinal = interferencia + "...";

console.log(mensajeFinal);

const matriculaSucia = "   ec_ilx_2026   ";

const matriculaLimpia = matriculaSucia
  .trim()
  .replaceAll("_", "-")
  .toUpperCase();

console.log(matriculaLimpia);
