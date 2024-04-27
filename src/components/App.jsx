import React, { Suspense, lazy, useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Homepage from './Homepage'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTasks } from '../redux/api/taskApi'
import PrivateRoute from './PrivateRoute'
import TodosSkeleton from './TodosSkeleton'
import Spinner from './Spinner'
import ReplySpinner from './ButtonSpinner'
const Login = lazy(() => import('./Login'));
const Signup = lazy(() => import('./Signup'));
const ReminderPage = lazy(() => import('./ReminderPage'));
const About = lazy(() => import('./About'));

const App = () => {
    const userDispatch = useDispatch();
    const auth = useSelector(state => state.user.auth);

    useEffect(() => {
        userDispatch(getAllTasks('reminders'));
    }, []);

    return (
        <>
            <Navbar />
            <div className='flex h-screen'>
                <div className='hidden h-full sm:block flex-[0.25]'>
                    <Sidebar />
                </div>
                <div className='flex-1 sm:p-2 h-full overflow-scroll scroll-smooth'>
                    <Routes>  
                        <Route path='/' element={<PrivateRoute />}>
                            <Route index element={auth ? <Homepage /> : <Suspense fallback={<Spinner />}><About /></Suspense>}></Route>
                            <Route path='signup' element={<Suspense fallback={<Spinner />}><Signup /></Suspense>}></Route>
                            <Route path='login' element={<Suspense fallback={<Spinner />}><Login /></Suspense>}></Route>
                            <Route path='about' element={<Suspense fallback={<Spinner />}><About /></Suspense>}></Route>
                            <Route path='reminders' element={<Suspense fallback={<TodosSkeleton />}><ReminderPage /></Suspense>}></Route>
                        </Route>
                            <Route path='*' element={"404 Page not found"}></Route>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App