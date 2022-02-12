const Tarea = require("./tarea");

class Tareas {
    constructor(){
        this._listado = {};
    }

    crearTarea( desc = ''){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    listarTareas(tareas = this.listadoArr){
        tareas.forEach((tarea, i) =>{
            const idx = `${i + 1}`.green;
            const { desc, estado } = tarea;

            console.log(`${ idx } ${ desc } :: ${ estado ? 'Completada'.green : 'Pendiente'.red }`);
        });
    }

    clasificarTareas(completada = true){
        return this.listadoArr.filter(tarea => tarea.estado == completada);
            
    }
    
    get listadoArr(){
        const listado = [];

        Object.keys(this._listado).forEach(key => listado.push(this._listado[key]));

        return listado;
    }
  
}

module.exports = Tareas;