import React, { useContext } from 'react'
import TaskItem from './TaskItem'
import { AppContext } from '../context/AppContext'

const TaskList = () => {
    const { tasks } = useContext(AppContext)

    return (
        <main className="bg-blue-100 rounded-lg w-1/4 max-sm:w-3/4 flex flex-col items-center shadow-lg shadow-blue-500/50">
            <span className="font-bold text-2xl">Lista de tareas</span>
            <ul>
                {tasks.length == 0 ?
                    <li className="bg-red-500 w-auto p-5 rounded-lg text-lg font-bold my-3">No hay tareas</li>
                    :
                    tasks.map((task, i) => {
                        return (<TaskItem key={i} task={task} />)
                    })
                }
            </ul>
        </main>
    )
}

export default TaskList