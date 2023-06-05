import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return(
        <div className='md:max-w-[640px] w-full mx-0 border h-screen md:mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
    )
}