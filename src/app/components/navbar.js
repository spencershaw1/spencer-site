"use client";
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <nav>
        <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="text-timberwolf text-xl font-bold">
                <Link href="/">
                    Spencer Shaw
                </Link>
            </div>
        </div>

        {/* Hamburger Menu on mobile */}
        <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                myButton
            </button>
        </div>





        <ul>
            <li className="text-sky-400"><Link href="#about">NAVBARRR</Link></li>
            <li><Link href="#experience">Experience</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
        </ul>
    </nav>
    );
}
