const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    constructor(){
        this._listado = {} //no es neesario definir arriba, puesto que en el mismo constructor puede crear las propiedades
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }
}

module.exports = Tareas


