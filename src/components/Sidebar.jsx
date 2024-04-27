import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { userLogout } from '../redux/api/userApi';
import ButtonSpinner from './ButtonSpinner';

const Sidebar = () => {
    const auth = useSelector(state => state.user.auth);
    const isLoading = useSelector(state => state.user.isLoading);
    const userDispatch = useDispatch();
    return (
        <div className='sm:pl-2 sm:py-2 w-full z-20 relative'>
            <ul className='bg-white sm:border rounded-xl flex flex-col gap-1 p-3 font-semibold text-sm text-slate-900'>
                <NavLink to={'/'}>
                    <li className='flex items-center gap-2 py-2 px-3 rounded-md hover:bg-violet-50 hover:text-violet-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <p>Overview</p>
                    </li>
                </NavLink>
                <hr />
                {auth && <>
                <NavLink to={'/reminders'}>
                    <li className='flex items-center gap-2 py-2 px-3 rounded-md hover:bg-violet-50 hover:text-violet-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                        <p>Reminders</p>
                    </li>
                </NavLink>
                <hr /></>}
                <NavLink to={'/about'}>
                    <li className='flex items-center gap-2 py-2 px-3 rounded-md hover:bg-violet-50 hover:text-violet-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <p>About</p>
                    </li>
                </NavLink>
                <hr />
                {!auth && <><NavLink to={'/signup'}>
                    <li className='flex items-center gap-2 py-2 px-3 rounded-md hover:bg-violet-50 hover:text-violet-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                        <p>Signup</p>
                    </li>
                </NavLink>
                <hr />
                <NavLink to={'/login'}>
                    <li className='flex items-center gap-2 py-2 px-3 rounded-md hover:bg-violet-50 hover:text-violet-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                        <p>Login</p>
                    </li>
                </NavLink></>}
                {auth?isLoading?<div className='text-red-500 w-8 h-8 self-center p-1'><ButtonSpinner /></div>:<li className='flex-1 flex mt-8' onClick={() => userDispatch(userLogout())}>
                    <div className='self-end flex gap-2 py-2 px-3 rounded-md bg-red-50 text-red-500 ml-auto items-center w-full justify-center hover:bg-red-500 hover:text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                        <p>Logout</p>
                    </div>
                </li>:null}
            </ul>
        </div>
    )
}

export default Sidebar