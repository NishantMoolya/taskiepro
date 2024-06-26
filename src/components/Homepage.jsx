import React, { useEffect, useMemo } from 'react'
import avatar from '../assets/person1.jpg'
import ProgressBar from './ProgressBar';
import CreateTask from './CreateTask';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../redux/api/taskApi';
import TodoPage from './TodoPage';
import MetaBlock from './MetaBlock';
import TodosSkeleton from './TodosSkeleton';

const Homepage = () => {
    const tasks = useSelector(state => state.tasks);
    const taskDispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if(tasks.todos.length === 0) taskDispatch(getAllTasks('todos'));
    }, []);

    const taskData = useMemo(() => {
        const completed = tasks.todos.filter(todo => todo.completed === true).length;
        const totaltodo = tasks.todos.length;
        const pending = tasks.todos.filter(todo => todo.completed === false).length;
        const progress = Math.ceil(completed / totaltodo * 100);
        return { progress, completed, totaltodo, pending }
    }, [tasks.todos]);
    const scheduled = useMemo(() => tasks.reminders.length, [tasks.reminders]);

    return (
        <div className='flex flex-col gap-3'>
            <div className='flex items-center px-2 sm:px-0'>
                <img src={avatar} alt="user avatar" className='w-16 h-16 object-cover self-start' />
                <div className='flex flex-col'>
                    <p className='text-xl font-bold'>Hi, <span className='capitalize'>{user.name}🖐️</span></p>
                    <p className='font-semibold text-base text-slate-500'>What are you planning to do today?</p>
                </div>
            </div>
            <CreateTask />
            <div className='flex flex-wrap gap-2 px-2 sm:px-0'>
                <MetaBlock color={'bg-orange-500'} label={'pending'} value={taskData.pending}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                </MetaBlock>
                <MetaBlock color={'bg-cyan-500'} label={'scheduled'} value={scheduled}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                </MetaBlock>
                <MetaBlock color={'bg-green-600'} label={'completed'} value={taskData.completed}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                    </svg>
                </MetaBlock>
            </div>
            <div className='px-2 sm:px-0'>
                {tasks.todos.length !== 0 && <ProgressBar progress={taskData.progress} />}
            </div>
            <div className='flex flex-col gap-4'>
                {!tasks.isLoading?<TodoPage />:<TodosSkeleton />}
            </div>
        </div>
    )
}

export default Homepage