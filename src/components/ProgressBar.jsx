import React, { useEffect, useRef, useState } from 'react'
import '../styles/progressbar.css'

const ProgressBar = ({ progress }) => {
    //let progress = 0;
    const progressFrameRef = useRef();
    const [threshold, setThreshold] = useState(0);
    useEffect(() => {
      const occupied = progressFrameRef.current.clientWidth/2 - 59;
      const totalAvailable = progressFrameRef.current.clientWidth;
      setThreshold(occupied/ totalAvailable * 100);
    },[]);
    //Math.min(100,Math.max(0,progress));
  return (
  <div ref={progressFrameRef} className="progress-striped active bg-slate-100 rounded-xl overflow-hidden relative flex flex-1 w-full justify-center items-center">
      <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} style={{width:`${progress}%`}} className="progress-bar absolute left-0 h-full bg-violet-600 flex items-center justify-end">
        {progress < 100 && <span className='h-full w-2 bg-violet-300 text-transparent rounded-r-3xl animate-ping absolute right-[-8px]'></span>}
     </div>
        <span className={`${progress > threshold?'text-white':'text-black'} font-bold z-10`}>{progress}% completed</span>
    </div>
  )
}

export default ProgressBar