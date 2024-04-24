import React, { useState } from 'react'
import Sidebar from './Sidebar';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className='flex bg-violet-700 w-full p-2 items-center justify-between'>
      <h4 className='text-lg font-bold text-white'>Taskiepro</h4>
      {!open?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => setOpen(true)} className="w-7 h-7 sm:hidden text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => setOpen(false)} className="w-7 h-7 sm:hidden text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>}
    </div>
    {open && <div className='absolute w-full'>
    <Sidebar />
    </div>}
    </>
  )
}

export default Navbar