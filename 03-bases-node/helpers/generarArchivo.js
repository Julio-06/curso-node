const fs = require('fs');

const crearArchivo = async (nombre, texto) => {
    try{
        console.log(`${ nombre } creada exitosamente`);
        await fs.writeFileSync(`./archivos/${nombre}`, texto)

        return nombre;

    }catch(e){
        throw e;
    }

}

module.exports = { crearArchivo }