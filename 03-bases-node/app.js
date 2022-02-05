
const { generarTabla } = require('./helpers/multiplicar');
const { crearArchivo } = require('./helpers/generarArchivo');

console.clear();

console.log(process.argv);

const [, , arg3 = '--base=5'] = process.argv;
const [, base = 5 ] = arg3.split('=');

res = generarTabla(parseInt(base))

crearArchivo(res.nombre, res.texto)
.then(archivo => console.log(archivo, 'creado'))
.catch(error => console.log(error))
