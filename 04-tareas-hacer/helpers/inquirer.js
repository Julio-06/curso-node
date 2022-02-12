const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'.green } Listar tareas`
            },
            {
                value: '3',
                name: `${ '3.'.green } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.green } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.green } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.green } Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.'.green } Salir`
            },
        ]

    }
];

const inquirerMenu = async () => {
    //console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('=========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const inquirerMenuBorrar = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${ i + 1 }.`.green;
        return { value: tarea.id, name: `${ idx } ${tarea.desc}`};
    });

    choices.unshift({value: '0', name: '0.'.green + 'Cancelar'});
  
    const preguntas = [
        {
            type: 'list',
            name: 'opcion',
            message: 'Borrar',
            choices
        }
    ];

    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('=========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;

}

const inquirerMenuChecklist = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${ i + 1 }.`.green;
        return { 
            value: tarea.id, 
            name: `${ idx } ${tarea.desc}`, 
            checked: tarea.estado ?? false
        };
    });

    //choices.unshift({value: '0', name: '0.'.green + 'Cancelar'});
  
    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ];

    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('=========================\n'.green);

    const { ids } = await inquirer.prompt(preguntas);

    return ids;

}

const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);

}

const confirmar = async (message) => {
    const pregunta = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(pregunta);

    return ok;
}

const leerInput = async( name, message ) => {
    const question = [
        {
            type: 'input',
            name,
            message,
            validate(value){
                if( value.length === 0) {
                    return 'Por Favor ingrese un valor';
                } 
                return true;
                
                    
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);

    return desc;
}

module.exports = { 
    inquirerMenu, 
    pausa, 
    leerInput, 
    inquirerMenuBorrar, 
    confirmar, 
    inquirerMenuChecklist 
};