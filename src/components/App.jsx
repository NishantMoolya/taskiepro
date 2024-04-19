import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Homepage from './Homepage'

const App = () => {
    return (
        <>
            <Navbar />
            <div className='flex h-screen'>
                <Sidebar />
                <div className='flex-1 sm:p-2 h-full overflow-scroll scroll-smooth'>
                <Homepage />
                </div>
            </div>
        </>
    )
}

export default App