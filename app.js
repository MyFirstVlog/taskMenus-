require('colors')
const {guardardB, leerInfo} = require('./helpers/guardarArchivo.js')
const { inquirerMenu, 
            inquirerPausa, 
                leerInput, 
                    listadoTareasBorrar, 
                        confirmar, 
                            mostrarListadoCheck } = require('./helpers/inquirer.js')
//const Tarea = require('./Models/tarea.js')
const Tareas = require('./Models/tareas.js')
const {mostrarMenu, pausa} = require('.\\helpers\\mensajes.js')

const main = async() => {
    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerInfo()

    if(tareasDB){
        tareas.cargartarea(tareasDB)
    }

    //await inquirerPausa()

    do {
        
        opt = await inquirerMenu()
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion')
                console.log(desc)
                tareas.crearTarea(desc)
            break;

            case '2':
                tareas.listadoCompleto()
            break;

            case '3':
                tareas.tareasPendientesCompletadas(true)
            break;

            case '4':
                tareas.tareasPendientesCompletadas(false)
            break;

            case '5':
                const ids = await mostrarListadoCheck(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
                console.log({ids})
            break

            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr)
                if(id !== '0'){
                    const ok = await confirmar('Estas seguro my broh???')
                    if(ok){
                        tareas.borrarTarea(id)
                        console.log('Tarea Borrada Correctamente')
                    }
                }
            break;
        }

        guardardB(tareas.listadoArr)
        
        await inquirerPausa()
    } while (opt !== '0');

}

main()

/**
 * 
 *      // const tarea = new Tarea('Lavar los trastes')
        // const tareas = new Tareas()
        // tareas._listado[tarea.id] = tarea
        // console.log(tareas._listado)
 * 
 */