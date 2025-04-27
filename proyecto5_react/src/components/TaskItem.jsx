import React from 'react'

const TaskItem = ({ task }) => {
    return (
        <li className="bg-teal-300 w-auto p-5 rounded-lg text-lg font-bold my-3">
            {
                task
            }
        </li>
    )
}

export default TaskItem