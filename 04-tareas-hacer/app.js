require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, inquirerMenuBorrar, confirmar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB)
    }
    
    do{
        opt = await inquirerMenu();

        switch (opt){
            case '1':
                const desc = await leerInput('desc', 'Descripción:');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listarTareas()
                break;
            case '3':
                tareas.listarTareas(tareas.clasificarTareas(true))
                break;
            case '4':
                tareas.listarTareas(tareas.clasificarTareas(false))
                break;
            case '5':
                console.log('tareas completadas');
                break;
            case '6':
                const id = await inquirerMenuBorrar(tareas.listadoArr)
                const ok = await confirmar('¿Está seguro?')
                if(ok){
                    tareas.borrarTarea(id)
                    console.log('Tarea borrada');
                }
                break;

        }

        guardarDB(tareas.listadoArr);

        await pausa();

    }while( opt !== '0' );

}

main();