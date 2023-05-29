import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return(
        <div className='md:max-w-sm md:mx-auto'>
            <Navbar/>
            <Outlet/>
        </div>
    )
}