import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/api/taskApi';
import ButtonSpinner from './ButtonSpinner';

const CreateTask = () => {
    const initialTask = {
        title: '',
        date: '',
        category: '',
        interval: 0
    }
    const [task, setTask] = useState(initialTask);
    const [showInput, setShowInput] = useState(false);
    const taskDispatch = useDispatch();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setTask(prev => ({ ...prev, [name]: value }));
    }
    const handleTaskSubmit = (e) => {
        e.preventDefault();
        if (task.title.trim() !== '') {
            if (task.category === 'reminder' && task.date !== '' && task.interval > 0) {
                const diff = new Date(task.date).getTime() - task.interval * 60000;
                const eligible = diff - new Date().getTime();
                if (Math.sign(eligible) !== -1) {
                    taskDispatch(addTask(task));
                    setShowInput(false);
                    setTask(initialTask);
                } else {
                    alert("Choose a proper time gap between reminding time and interval");
                }
            } else if (task.category === 'todo') {
                taskDispatch(addTask(task));
                setShowInput(false);
                setTask(initialTask);
            } else {
                console.log('error');
                alert("choose a category");
            }
        } else {
            alert("Title of the task is needed.");
        }
    }
    const handleReset = () => {
        setTask(initialTask);
        setShowInput(false);
    }

    const isLoading = useSelector(state => state.tasks.isLoading);

    return (
        <>
            {!showInput?isLoading?<div className='bg-white text-violet-500 w-6 self-center sm:self-end sm:mr-4'><ButtonSpinner /></div>:<button onClick={() => setShowInput(true)} className={`uppercase bg-violet-500 shadow-md text-sm font-semibold py-1 px-3 rounded text-white self-center sm:self-end mx-2 flex items-center justify-center gap-1`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>Create</button>
            :<form onSubmit={handleTaskSubmit} onReset={handleReset} onChange={handleInput} className='bg-white rounded-md shadow p-2 flex flex-col gap-2 mx-2'>
                <textarea type="text" rows={2} name='title' value={task.title} className='placeholder:text-slate-300 outline-none resize-none' placeholder='Task description...' />
                <div>
                    <label htmlFor="todo" className='flex items-center gap-1'><input type="radio" name="category" value={'todo'} checked={task.category === 'todo'} />Todo</label>
                    <label htmlFor="reminder" className='flex items-center gap-1'><input type="radio" name="category" value={'reminder'} checked={task.category === 'reminder'} />Reminder</label>
                </div>
                <div className='flex flex-col sm:flex-row justify-between sm:items-center flex-wrap gap-2'>
                    {task.category === 'reminder' ? <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                        <div className='py-1 px-2 border rounded-lg flex'>
                            <select name="interval" className='outline-none flex-1'>
                                <option value="0">Remind before?</option>
                                <option value="60">1 hour before</option>
                                <option value="30">30 minutes before</option>
                            </select>
                        </div>
                        <input type="datetime-local" name='date' value={task.date} min={new Date().toISOString().slice(0, 10)} className='py-1 px-2 border rounded-lg outline-none' />
                    </div> : <span></span>}
                    <div className='self-end flex gap-2'>
                        <button type='reset' className='uppercase text-sm bg-red-50 font-semibold rounded-lg py-1 px-3 text-red-500'>cancel</button>
                        <button type='submit' className='uppercase text-sm bg-violet-500 py-1 px-3 rounded-lg font-semibold text-white'>add task</button>
                    </div>
                </div>
            </form>}
        </>
    )
}

export default CreateTask