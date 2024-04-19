import React from 'react'

const TaskItem = ({ task }) => {
  return (
    <div className={`bg-white flex gap-2 px-2 py-2 pt-1 rounded shadow border-t-4 ${task.completed ? 'border-green-500' : 'border-sky-400'}`}>
      {task.completed ? <input type="checkbox" checked={true} className='appearance-none w-4 h-4 border-2 border-green-500 rounded-full mt-1 relative peer checked:ring-1 checked:ring-green-500 checked:bg-green-500 checked:text-white shrink-0 hover:cursor-pointer' />
        : <input type="checkbox" className='appearance-none w-4 h-4 border-2 border-green-500 rounded-full mt-1 relative peer checked:ring-1 checked:ring-green-500 checked:bg-green-500 checked:text-white shrink-0 hover:cursor-pointer' />}
      <svg
        className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <p className='first-letter:capitalize font-semibold sm:text-base text-sm flex-1'>{task.title}</p>
      {!task.completed && <button className='text-red-500 mt-1 flex self-start'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>}
    </div>
  )
}

export default TaskItem