import React from 'react'
import TaskItem from './TaskItem'

const TaskSubContainer = ({ list,completed }) => {
    return (
        <div className='flex flex-col flex-1 gap-2 rounded p-2'>
            <div className={`${completed?'bg-green-500 shadow-green-300':'bg-sky-500 shadow-sky-300'} py-1 px-3 rounded-3xl shadow`}>
                <p className={`text-base font-bold text-center text-white`}>{completed?'Completed':'In progress'}</p>
            </div>
            {
                list?.map((task, ind) => <TaskItem key={ind} task={task} />)
            }
        </div>
    )
}

export default TaskSubContainer  