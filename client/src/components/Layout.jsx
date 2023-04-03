import React from 'react'
import { useState, useEffect, Fragment } from "react";
import Topbar from './Topbar';
import Sidebar from './Sidebar';

import { Transition } from '@headlessui/react'

const Layout = ({ children }) => {

    const [showNav, setShowNav] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    const handleSize = () => {
        if(window.innerWidth <= 640) {
        setShowNav(false)
        setIsMobile(true)
        }
        else {
        setShowNav(true)
        setIsMobile(false)
        }
    }

    useEffect(() => {
        if(typeof window != undefined) {
        window.addEventListener('resize', handleSize)
        }

        return () => {
        window.removeEventListener('resize', handleSize)
        }
    }, [])

    return (
        <>
            <Topbar showNav={showNav} setShowNav={setShowNav} />
            
            <Transition
                as={Fragment}
                show={showNav}
                enter="transform transition duration-[400ms]"
                enterFrom="-transition-x-full"
                enterTo="translate-x-0"
                leave="transform duration-[400ms] transition ease-in-out"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <Sidebar />
            </Transition>

            <main className={`pt-10 transition-all duration-[400ms] ${showNav && !isMobile ? "pl-56" : "pl-0"}`}>
                <div className='px-4 md:px-16'>

                </div>
                {children}
            </main>
        </>
    )
}

export default Layout