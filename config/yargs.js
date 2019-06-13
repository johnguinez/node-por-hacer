const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea x hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crear un elemento', {
        descripcion
    })
    .command('actualizar', 'actualizar un elmento', {
        descripcion,
        completado
    })
    .command('borrar', 'actualizar un elmento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}