require('colors')
const { inquirerMenu, inquirerPausa, leerInput } = require('./helpers/inquirer.js')
//const Tarea = require('./Models/tarea.js')
const Tareas = require('./Models/tareas.js')
const {mostrarMenu, pausa} = require('.\\helpers\\mensajes.js')

const main = async() => {
    let opt = ''
    const tareas = new Tareas()

    do {
        
        opt = await inquirerMenu()
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion')
                console.log(desc)
                tareas.crearTarea(desc)
            break;

            case '2':
                console.log(tareas._listado)
            break;
        }

        
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