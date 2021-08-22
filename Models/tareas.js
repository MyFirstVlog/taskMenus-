require('colors')
const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr(){
        const listado = []
        Object.keys(this._listado).forEach(keys => {
            listado.push(this._listado[keys])
        })

        return listado
    }

    constructor(){ 
        this._listado = {} //no es neesario definir arriba, puesto que en el mismo constructor puede crear las propiedades
    }
    
    cargartarea = (tareas) =>{
        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea
        })
    }

    listadoCompleto (){
        this.listadoArr.forEach((each,index)=>{
            const {desc, completadoEn} = each
            const rta = (completadoEn) 
                            ? console.log(`${index.toString().green}. ${desc} ::  ${'Completado'.green}\n`) 
                            : console.log(`${index.toString().red}. ${desc} ::  ${'Pendiente'.red}\n`)
        })
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id]
        }
    }

    tareasPendientesCompletadas(completadas = true){
        this.listadoArr.forEach((each,index)=>{
            const {desc, completadoEn} = each
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red

            if(completadas){
                if(completadoEn){
                    console.log(`${index.toString().green}. ${desc} ::  ${estado}\n`)
                }
            }else{
                if(!completadoEn){
                    console.log(`${index.toString().red}. ${desc} ::  ${estado}\n`)
                }
            }
        })
    }
}

module.exports = Tareas


