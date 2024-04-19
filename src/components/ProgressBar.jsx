import React from 'react'
import '../styles/progressbar.css'

const ProgressBar = () => {
    let progress = 70;
  return (
  <div className="progress-striped active bg-slate-200 rounded-xl overflow-hidden flex flex-1 w-full">
      <div role={"progressbar progress-striped"} style={{width:`${progress}%`}} className="progress-bar bg-violet-600 flex items-center justify-center text-white font-bold">
        <span>{progress}% completed</span>
    </div>
        {progress < 100 && <span className='h-full bg-violet-300 text-transparent rounded-r-3xl animate-ping'>h</span>}
    </div>
  )
}

export default ProgressBar