const fs = require('fs');

const crearArchivo = async (nombre, texto) => {
    try{
        if(!fs.existsSync('./archivos')){
            fs.mkdirSync('./archivos')
        }
        
        await fs.writeFileSync(`./archivos/${nombre}`, texto)

        return nombre;

    }catch(e){
        throw e;
    }

}

module.exports = { crearArchivo }