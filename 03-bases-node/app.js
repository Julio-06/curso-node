const { generarTabla } = require('./helpers/multiplicar');
const { crearArchivo } = require('./helpers/generarArchivo');
const argv  = require('./config/yargs');

console.clear();

res = generarTabla(argv.b, argv.l, argv.h)

crearArchivo(res.nombre, res.texto)
.then(archivo => console.log(archivo, 'creado'))
.catch(error => console.log(error))
