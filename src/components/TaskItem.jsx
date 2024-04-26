import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, markCompleted } from '../redux/reducers/taskReducer';
import { removeTask, updateTask } from '../redux/api/taskApi';

const TaskItem = ({ task }) => {
  const taskDispatch = useDispatch();
  const [openOptions, setOpenOptions] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [completed, setCompleted] = useState(true);

  const editTask = () => {
    setEdit(false);
    setOpenOptions(false);
    taskDispatch(updateTask(editedTask));
  }
  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({ ...prev, [name]: value }));
  }
  const handleCompleted = () => {
    taskDispatch(updateTask({ ...editedTask, completed: completed }));
    setCompleted(prev => !prev);
  }
  const handleDelete = () => {
    taskDispatch(removeTask({ _id: task._id, category: "todo" }));
    setOpenOptions(false);
    taskDispatch(deleteTask({ _id: task._id, category: 'todo' }));
  }
  return (
    <>
      <div className={`bg-white relative flex gap-2 px-2 py-2 pt-1 rounded shadow border-t-4 ${editedTask.completed ? 'border-green-500' : 'border-sky-400'}`}>
        {editedTask.completed ? <input type="checkbox" checked={true} className='appearance-none w-4 h-4 border-2 border-green-500 rounded-full mt-1 relative peer checked:ring-1 checked:ring-green-500 checked:bg-green-500 checked:text-white shrink-0 hover:cursor-pointer' />
          : <input type="checkbox" name='completed' onChange={handleCompleted} className='appearance-none w-4 h-4 border-2 border-green-500 rounded-full mt-1 relative peer checked:ring-1 checked:ring-green-500 checked:bg-green-500 checked:text-white shrink-0 hover:cursor-pointer' />}
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
        {!edit ? <p onClick={() => setOpenOptions(false)} className='first-letter:capitalize font-semibold sm:text-base text-sm flex-1'>{editedTask.title}</p>
          : <textarea rows={1} onChange={handleEdit} type="text" name='title' className='resize-none border outline-none flex-1 px-1 sm:text-base text-sm' value={editedTask.title} autoFocus />}
        {!task.completed ? <>
          {!edit && <>
            <button onClick={() => setEdit(true)} className='text-violet-500 mt-1 sm:flex hidden self-start'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </button>
            <button onClick={handleDelete} className='text-red-500 mt-1 sm:flex hidden self-start'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button></>}
          {openOptions && <div className='flex p-1 gap-1 z-10 flex-col items-center sm:hidden shadow rounded absolute right-4 bg-white'>
            <button onClick={() => { setEdit(true); setOpenOptions(false) }} className='text-violet-500'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </button>
            <button onClick={handleDelete} className='text-red-500'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>}
          {!edit ? <svg onClick={() => setOpenOptions(true)} xmlns="http://www.w3.org/2000/svg" id='threedots' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
            : <svg onClick={editTask} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>}
        </> : <button onClick={handleDelete} className='text-red-500 mt-1 flex self-start'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>}
      </div>
    </>
  )
}

export default TaskItem