import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/api/taskApi';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const CreateTask = ({ close }) => {
    const initialTask = {
        title:'',
        date:'',
        category:'',
        interval:0
    }
    const [task,setTask] = useState(initialTask);
    const taskDispatch = useDispatch();
    const handleInput = (e) => {
        const { name,value } = e.target;
        setTask(prev => ({...prev,[name]:value}));
    }
    const handleTaskSubmit = (e) => {
        e.preventDefault();
            if(task.title.trim() !== ''){
                if(task.category === 'reminder' && task.date !== '' && task.interval > 0){
                    console.log(task.date);
                    const diff = new Date(task.date).getTime() - task.interval*60000;
                    const eligible = diff - new Date().getTime();
                    if(Math.sign(eligible) !== -1){
                        taskDispatch(addTask(task));
                        close();
                        //console.log("eligible",eligible);
                    }else{
                        alert("Choose a proper time gap between reminding time and interval");
                    }
                }else if(task.category === 'todo'){
                    taskDispatch(addTask(task));
                    close();
                }else{
                    console.log('error');
                    alert("choose a category");
                }
            }else{
                alert("Title of the task is needed.");
            }
    }
    const handleReset = () => {
        setTask(initialTask);
        close();
    }
  return (
    <form onSubmit={handleTaskSubmit} onReset={handleReset} onChange={handleInput} className='bg-white rounded-md shadow p-2 flex flex-col gap-2 mx-2'>
        <textarea type="text" rows={2} name='title' value={task.title} className='placeholder:text-slate-300 outline-none resize-none' placeholder='Task description...' />
        <div>
        <label htmlFor="todo" className='flex items-center gap-1'><input type="radio" name="category" value={'todo'} checked={task.category === 'todo'} />Todo</label>
        <label htmlFor="reminder" className='flex items-center gap-1'><input type="radio" name="category" value={'reminder'} checked={task.category === 'reminder'} />Reminder</label>
        </div>
        <div className='flex flex-col sm:flex-row justify-between sm:items-center flex-wrap gap-2'>
        {task.category === 'reminder'?<div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                                        <div className='py-1 px-2 border rounded-lg flex'>
                                        <select name="interval" className='outline-none flex-1'>
                                            <option value="0">Remind before?</option>
                                            <option value="60">1 hour before</option>
                                            <option value="30">30 minutes before</option>
                                        </select>
                                        </div>
                                        <input type="datetime-local" name='date' value={task.date} min={new Date().toISOString().slice(0,10)} className='py-1 px-2 border rounded-lg outline-none' />
                                        </div>:<span></span>}
        <div className='self-end flex gap-2'>
            <button type='reset' className='uppercase text-sm bg-red-50 font-semibold rounded-lg py-1 px-3 text-red-500'>cancel</button>
            <button type='submit' className='uppercase text-sm bg-violet-500 py-1 px-3 rounded-lg font-semibold text-white'>add task</button>
        </div>
        </div>
    </form>
  )
}

export default CreateTask