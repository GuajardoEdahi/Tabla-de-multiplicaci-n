
const argv = require ('./config/yargs');
const { crearArchivo } = require ('./helpers/multiplicar');
const colors = require('colors');

console.clear()


crearArchivo(argv.b, argv.l, argv.ha)
    .then(nombreArchivo=> console.log(nombreArchivo.underline))
    .catch(err=>console.log('err'));





 