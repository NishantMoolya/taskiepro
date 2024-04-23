import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Homepage from './Homepage'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'

const App = () => {
    return (
        <>
            <Navbar />
            <div className='flex h-screen'>
                <Sidebar />
                <div className='flex-1 sm:p-2 h-full overflow-scroll scroll-smooth'>
                    <Routes>
                        <Route path='/'>
                            <Route index element={<Homepage />}></Route>
                            <Route path='signup' element={<Signup />}></Route>
                            <Route path='login' element={<Login />}></Route>
                        </Route>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App