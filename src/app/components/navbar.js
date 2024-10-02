"use client";
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen( !isOpen );
    }

    return (
    <nav>
        <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="text-timberwolf text-xl font-bold">
                <Link href="/">
                    Spencer Shaw
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-4">
                <Link href="/" className="hover:text-gold">About</Link>
                <Link href="/" className="hover:text-gold">Experience</Link>
                <Link href="/" className="hover:text-gold">Projects</Link>
                <Link href="/" className="hover:text-gold">Contact</Link>
            </div>

            {/* Hamburger Menu on mobile */}
            <div className="sm:hidden z-50 relative flex items-center">
                <button onClick={toggleMenu} className={`text-white focus:outline-none transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} sm:hidden fixed top-0 right-0 w-64 h-full bg-onyx transform transition-transform 
                            duration-300 ease-in-out pt-[12vh]`}>
                <div className="flex flex-col items-center space-y-4 p-6">
                    <Link href="/" className="hover:text-gold" onClick={toggleMenu}>About</Link>
                    <Link href="/" className="hover:text-gold" onClick={toggleMenu}>Experience</Link>
                    <Link href="/" className="hover:text-gold" onClick={toggleMenu}>Project</Link>
                    <Link href="/" className="hover:text-gold" onClick={toggleMenu}>Contact</Link>
                </div>
            </div>

        </div>
    </nav>
    );
}
