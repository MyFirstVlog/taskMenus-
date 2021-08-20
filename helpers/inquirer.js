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
                name: '1. Crear Tarea'
            },
            {
                value:'2',
                name: '2. Listar Tareas'

            },
            {
                value:'3',
                name:'3. Listar Tareas Completadas'

            },
            {
                value:'4',
                name:'4. Listar Tareas Pendientes'

            },
            {
                value:'5',
                name:'5. Completar Tarea(s)'

            },
            {
                value:'6',
                name:'6. Borrar Tarea'

            },
            {
                value:'0',
                name:'0. Salir'

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

module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput
}
