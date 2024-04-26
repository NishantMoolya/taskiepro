import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux';
import TodosSkeleton from './TodosSkeleton';
const TaskSubContainer = lazy(() => import('./TaskSubContainer'));

const TodoPage = () => {
    const todos = useSelector(state => state.tasks.todos);

    return (
        <div>
            <div className='flex flex-col'>
                <p className='bg-white py-1 px-3 text-lg font-semibold capitalize sm:border rounded-t-xl text-violet-500'>Todos({todos.length})</p>
                {todos.length !== 0 && <div className='flex flex-col sm:flex-row bg-slate-100 py-2 sm:rounded-b-xl'>
                    <Suspense fallback={<TodosSkeleton />}>
                        <TaskSubContainer list={todos?.filter(val => val.completed === false)} completed={false} />
                        <TaskSubContainer list={todos?.filter(val => val.completed === true)} completed={true} />
                    </Suspense>
                </div>}
            </div>
        </div>
    )
}

export default TodoPage