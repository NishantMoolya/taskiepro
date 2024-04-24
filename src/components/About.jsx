import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex flex-col gap-5 justify-center'>
      <div>
        <p className='text-violet-500 text-2xl font-bold text-center'>Taskiepro</p>
        <p className='text-violet-500 text-lg font-bold text-center'>A task management app</p>
      </div>
      <NavLink to={'/login'} className="self-center" ><button className='text-lg font-semibold text-white bg-violet-500 rounded py-2 px-3 hover:bg-violet-700 flex items-center gap-1'>Get started<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
      </button></NavLink>
      <div className='flex gap-2 flex-wrap sm:justify-center sm:flex-row flex-col items-center'>
        <div className='flex flex-col rounded shadow py-2 px-3 gap-2 max-w-96 sm:self-start m-2'>
          <div>
            <h4 className='text-xl font-bold text-slate-700'>Reminder</h4>
            <p className='text-base font-semibold text-slate-500'>Streamline your day with personalized reminders</p>
          </div>
          <p className='text-base text-slate-700'>A reminder is a notification designed to help you remember something important, such as an event, task, or appointment. It serves as a clue to bring your attention back to a specific activity or commitment at a predetermined time.</p>
        </div>
        <div className='flex flex-col rounded shadow py-2 px-3 gap-2 max-w-96 sm:self-start m-2'>
          <div>
            <h4 className='text-xl font-bold text-slate-700'>Todo</h4>
            <p className='text-base font-semibold text-slate-500'>Effortlessly manage tasks and complete it</p>
          </div>
          <p className='text-base text-slate-700'>A list or collection of tasks or activities that you need or want to accomplish.To-dos can range from simple everyday activities like grocery shopping or responding to emails to more complex tasks such as completing a project at work or studying for an exam.</p>
        </div>
      </div>
    </div>
  )
}

export default About