import React from 'react'

const TodosSkeleton = () => {
    return (
        <div className='bg-slate-50 flex sm:flex-row flex-col p-2 gap-2 rounded animate-pulse flex-wrap w-full'>
            <div className='flex-1 flex flex-col gap-2'>
                <div className='bg-slate-100 h-8 rounded'></div>
                <div className='bg-slate-100 h-8 rounded'></div>
                <div className='bg-slate-100 h-8 rounded'></div>
            </div>
            <div className='flex-1 flex flex-col gap-2'>
                <div className='bg-slate-100 h-8 rounded'></div>
                <div className='bg-slate-100 h-8 rounded'></div>
                <div className='bg-slate-100 h-8 rounded'></div>
            </div>
        </div>
    )
}

export default TodosSkeleton