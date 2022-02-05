
const generarTabla = ( base = 0) => {
    console.log(
        `========================
            Tabla del: ${base}
        =========================`
    );

    let salida = '';

    for( let i = 1; i <= 10; i++ ){
        salida += `${base} x ${i} = ${ i* base }\n`;
    }

    console.log(salida);

    return { texto:salida, nombre: `table-${base}.txt`};

}

module.exports = {
    generarTabla
}


