import React from 'react'

const ReminderItem = () => {
    return (
        <div className='bg-white flex gap-2 rounded shadow p-2'>
            <span className='flex items-center justify-center bg-red-500 w-1 h-1 mt-2 self-start rounded-full'>
            <span className='p-[5px] border-2 border-red-500 rounded-full animate-ping'></span>
            </span>
            <div className='flex flex-col flex-1 gap-2 divide-y-2'>
                <div className='flex justify-between flex-wrap gap-1'>
                <p className='font-semibold text-base'>Attend meeting and watering plants</p>
                <p className='font-semibold text-sm text-slate-600 border  border-slate-200 self-start py-1 px-3 rounded-2xl'>Today 9:00 am thu</p>
                </div>
                <div className='flex gap-2 py-1 divide-x-2'>
                <span className='flex self-start gap-1 text-sm text-slate-700'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-sky-500 shrink-0 mt-1">
                            <path d="M4.214 3.227a.75.75 0 0 0-1.156-.955 8.97 8.97 0 0 0-1.856 3.825.75.75 0 0 0 1.466.316 7.47 7.47 0 0 1 1.546-3.186ZM16.942 2.272a.75.75 0 0 0-1.157.955 7.47 7.47 0 0 1 1.547 3.186.75.75 0 0 0 1.466-.316 8.971 8.971 0 0 0-1.856-3.825Z" />
                            <path fillRule="evenodd" d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6Zm0 14.5a2 2 0 0 1-1.95-1.557 33.54 33.54 0 0 0 3.9 0A2 2 0 0 1 10 16.5Z" clipRule="evenodd" />
                        </svg>
                        <p>{new Date().toDateString()+' '+new Date().toLocaleTimeString()}</p>
                    </span>
                    <p className='text-sm text-slate-400 pl-2'>Reminding in 55 min</p>
                </div>
            </div>
        </div>
    )
}

export default ReminderItem