
const argvOptions = {
    'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: 0,
        describe: 'Define la base de la tabla'
    },
    'l':{
        alias: 'lista',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla por consola'
    },
    'h':{
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 12,
        describe: 'Define el tamaño de la tabla'
    }
};

const argv = require('yargs')
    .options(argvOptions)
    .check( (argv, option) => {
        if( isNaN( argv.b )){
            throw 'La base tiene que ser un número'.red;
        }

        if( isNaN( argv.h )){
            throw 'El hasta tiene que ser un número'.red;
        }
        
        return true;
    })
    .argv;

module.exports = argv;