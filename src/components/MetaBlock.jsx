import React from 'react'

const MetaBlock = ({ children,label,value,color='bg-violet-500' }) => {
    return (
        <div className={`${color} text-white font-bold rounded-xl p-4 flex justify-center gap-3 items-center flex-1`}>
            {children}
            <div className='flex flex-col items-center'>
                <p className='capitalize'>{label}</p>
                <p className='text-xl'>{value}</p>
            </div>
        </div>
    )
}

export default MetaBlock