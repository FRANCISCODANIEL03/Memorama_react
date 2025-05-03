import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks})=>{
    return (
        <main className="bg-green-200 rounded-lg w-1/4 flex flex-col items-center shadow-lg shadow-green-500/50">
            <span className="font-bold text-2xl">Lista de tareas</span>
            <ul>
                {
                    tasks.map((task, i)=>{
                        return (<TaskItem key={i} task={task}/>)
                    })
                }
            </ul>
        </main>
    )
}

export default TaskList