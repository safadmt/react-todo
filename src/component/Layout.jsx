import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import './Sidebar/sidebar.css'
function Layout() {
  return (
    <div>
        <Header/>
        <div className='main-layout'>
          <Sidebar/>
          <div className='contents'>
            <Outlet />
          </div>
         
        </div>
        
    </div>
  ) 
}

export default Layout