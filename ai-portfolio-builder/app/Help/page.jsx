'use client';
import React from 'react';
import SidebarPage from '../SidebarOfDashboard/SidebarPage';
import NavbarDemo from '../NavbarOfDashboard/NavbarDemo';

const HelpPage = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <SidebarPage />
      <NavbarDemo />
      <div className="ml-24 pt-28 px-10">
        <h1 className="text-4xl font-bold mb-6">Help & Support</h1>
        <p className="text-zinc-400">Welcome to the Help Center. If you have any questions, please contact our support team.</p>
      </div>
    </div>
  );
};

export default HelpPage;
