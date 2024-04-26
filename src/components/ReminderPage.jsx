import React from 'react'
import { useSelector } from 'react-redux'
import TodosSkeleton from './TodosSkeleton';
import ReminderItem from './ReminderItem';

const ReminderPage = () => {
    const reminders = useSelector(state => state.tasks.reminders);
    const isLoading = useSelector(state => state.tasks.isLoading);

    return (
        <div className='flex flex-col'>
            <p className='bg-white py-1 px-3 text-lg font-semibold capitalize sm:border rounded-t-xl text-violet-500'>Reminders({reminders.length})</p>
            {!isLoading?reminders?.length !== 0 && <div className='flex flex-col gap-2 bg-slate-100 py-4 px-2 sm:rounded-b-xl'>
                {
                    reminders?.map(task => <ReminderItem key={task._id} task={task} />)
                }
            </div>:<TodosSkeleton />}
        </div>
    )
}

export default ReminderPage