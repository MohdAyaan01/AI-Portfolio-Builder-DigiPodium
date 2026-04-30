"use client"
import React from 'react'
import SidebarPage from '../SidebarOfDashboard/SidebarPage'
import NavbarDemo from '../NavbarOfDashboard/NavbarDemo'
import DashboardContent from './DashboardContent'

const page = () => {
  return (
    <div className="bg-[#050505] min-h-screen">
        <SidebarPage/>
        <NavbarDemo/>
        <DashboardContent />
    </div>
  )
}

export default page
