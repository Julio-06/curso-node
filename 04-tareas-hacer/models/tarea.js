const { v4: uuidv4 } = require('uuid');

class Tarea {
    id = '';
    desc = '';
    completadoEn = null;
    estado = false;

    constructor( desc ){
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
        this.estado = false;
    }
}

module.exports = Tarea;