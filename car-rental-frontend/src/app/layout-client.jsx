"use client";

import { usePathname } from 'next/navigation';
import React from 'react'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const RootLayoutClient = ({ children }) => {

    const pathname = usePathname();

    const excludedRoutes = ["/login", "/register"];

    return (

        <div className=''>
            {!excludedRoutes.includes(pathname) && <Navbar />}
            <main className="">{children}</main>
            {!excludedRoutes.includes(pathname) && <Footer />}
        </div>

    )
};

export default RootLayoutClient;
