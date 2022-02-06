const colors = require('colors');

const generarTabla = ( base, listar, hasta) => {
    let salida = '';

    let consola = '';

    let titulo = `======================== Tabla del: ${ base } ========================= \n`;

    salida  += titulo;
    consola += titulo.black.bgWhite;
    

    for( let i = 1; i <= hasta; i++ ){
        salida  += `${ base } x ${ i } = ${ i * base } \n`;
        consola += `${ colors.red( base ) } x ${ colors.blue(i) } = ${ colors.green( i * base ) } \n`;
    }

    if(listar){
        console.log(consola);
    }

    return { texto:salida, nombre: `table-${base}.txt`};

}

module.exports = {
    generarTabla
}


