const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type:'number',
                demandOption: true,
                describe:'base de la tabla de multiplicar'
            })
            .option('l',{
                alias: 'listar',
                type:'boolean',
                default: false,
                describe:'muestra la lista de multiplicaciones que se realizaron'
            })
            .option('ha',{
                alias: 'hasta',
                type:'number',
                default:10,
                describe:'el número de veces que el multiplicador va a  multiplicarse'

            })
           
            .check( (argv, options)=>{
                if(isNaN(argv.b)) {
                    throw 'La base es no es un número '
                }
                return true;
            })
             .argv;


module.exports = argv;