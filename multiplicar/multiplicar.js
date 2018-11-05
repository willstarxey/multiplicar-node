//requireds

const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log(`====================TABLA DE ${base}================`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${ i } = ${base*i}\n`);
    }
}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${ i } = ${base*i}\n`);
        }

        fs.writeFile(`tablas/Tabla-${base}.txt`, data, err => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`.yellow);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}