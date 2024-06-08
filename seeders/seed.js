const { Todo } = require('../models')

async function createTodo() {
    try {
        const newData = await Todo.create({
                title: 'Todo 15',
                description: 'learn'
        })
        console.log('Berhasil menambah data', newData.toJSON())
    } catch (error) {
        console.error('Gagal menambah data', error)
    }

    // try {
    //     const newData = await Todo.destroy({
    //             id: 1     
    //     })
    //     console.log('Data berhasil dihapus')
    // } catch (error) {
    //     console.error('Gagal menghapus data', error)
    // }
}

createTodo()
