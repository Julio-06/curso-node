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
            const { desc, estado, completadoEn } = tarea;
            

            console.log(`${ idx } ${ desc } :: ${ estado ? 'Completada'.green : 'Pendiente'.red } ${ completadoEn ?? ' ' }`);
        });
    }

    clasificarTareas(completada = true){
        return this.listadoArr.filter(tarea => tarea.estado == completada);
            
    }

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    toggleCompletadas( ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.estado){
                tarea.estado = true;
                tarea.completadoEn = new Date().toISOString()
            }
        });

        this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].estado = false;
                this._listado[tarea.id].completadoEn = null;
                
            }

        });
    }

    get listadoArr(){
        const listado = [];

        Object.keys(this._listado).forEach(key => listado.push(this._listado[key]));

        return listado;
    }
  
}

module.exports = Tareas;