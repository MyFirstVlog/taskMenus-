require('colors')
const inquirer = require('inquirer')

const preguntas = [
    {
        type:'list',
        name: 'opt',
        message: 'Que desea hacer?',
        choices: [
            {
                value:'1',
                name: `${'1.'.yellow} Crear Tarea`
            },
            {
                value:'2',
                name: `${'2.'.yellow} Listar Tareas`

            },
            {
                value:'3',
                name:`${'3.'.yellow} Listar Tareas Completadas`

            },
            {
                value:'4',
                name:`${'4.'.yellow} Listar Tareas Pendientes`

            },
            {
                value:'5',
                name:`${'5.'.yellow} Completar Tarea(s)`
            },
            {
                value:'6',
                name:`${'6.'.yellow} Borrar Tarea`

            },
            {
                value:'0',
                name:`${'0.'.yellow} Salir`

            }
        ]
    }
]

const pausa = [
    {
        type:'input',
        name: 'opt',
        message: `Presione ${'ENTER'.green} para continuar`
    }
]

const inquirerMenu = async () => {
    console.clear()
    console.log("=======================".green)
    console.log("   Seleccione Opcion".green)
    console.log("=======================\n".green)

    const opt = await inquirer.prompt(preguntas)

    return opt.opt
}
const inquirerPausa = async () =>{
    console.log('\n')
    await inquirer.prompt(pausa)
}

const leerInput = async(message) => {

    const descripcion = [
        {
            type:'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por Favor ingrese la descripcion'
                }
                return true
            }
        }
    ]

    const {desc} = await inquirer.prompt(descripcion)

    return desc


}

const listadoTareasBorrar = async (lista = []) => {
    const choices = lista.map((each, index)=>{
        const {id, desc} = each
        const i = `${(index + 1 ).toString().green}. `
        return{
            value: id,
            name: `${i + desc}`
        }
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    choices.unshift({
        value:'0',
        name: `${"0.".green} Cerrar`
    })

    const {id} = await inquirer.prompt(preguntas)
    return id


}

const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const {ok} = await inquirer.prompt(question)
    return ok
}


const mostrarListadoCheck = async (lista = []) => {
    const choices = lista.map((each, index)=>{
        const {id, desc} = each
        const i = `${(index + 1 ).toString().green}. `
        return{
            value: id,
            name: `${i + desc}`,
            checked: (each.completadoEn) ? true : false
        }
    })

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(pregunta)
    return ids


}


module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput,
    listadoTareasBorrar, 
    confirmar,
    mostrarListadoCheck
}
