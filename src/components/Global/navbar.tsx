"use client";
import HML_LOGO from "@/assets/HML_logo-04.png";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { navLinks } from "@/utils/menuItems";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const pathname = usePathname();

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 border-b border-white/20 backdrop-blur-md backdrop-saturate-150 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">

                <div className="max-w-full px-4 md:px-10 lg:px-16 mx-auto ">
                    <div className="flex justify-between items-center">

                        {/* Logo */}
                        <Link href="/" className="flex items-center py-3 text-gray-700 hover:text-gray-900 z-50">
                            <Image
                                src={HML_LOGO}
                                alt="HML LOGO"
                                width={200}
                                height={100}
                                className="w-full h-16 object-contain"
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.link}
                                    className={`py-1 uppercase relative group transition-all duration-300 
                                        ${pathname.replace(/\/$/, "") === link.link.replace(/\/$/, "")
                                            ? "font-semibold text-[#094d82] border-[#094d82] border-b-2 "
                                            : "text-black font-semibold  hover:text-[#0e3d61]  hover:border-[#0e3d61]"}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={toggleMenu}>
                                <HiMenuAlt3 className="text-[#094d82] size-7" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-white/20 backdrop-blur-xl  
                         shadow-lg transition-all duration-500 ease-in-out z-40 
                        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                >
                    <button className="absolute right-5 top-5 p-1 border-2 rounded-full" onClick={toggleMenu}>
                        <IoClose className="text-[#094d82] size-7" />
                    </button>

                    <ul className="text-center bg-white h-screen text-lg leading-relaxed py-20">
                        {navLinks.map((link) => (
                            <li key={link.name} className="mt-4">
                                <Link href={link.link} onClick={toggleMenu}>
                                    <p
                                        className={`transition-colors duration-300 
                                            ${pathname.replace(/\/$/, "") === link.link.replace(/\/$/, "")
                                                ? "font-semibold text-[#094d82] "
                                                : "text-black font-semibold  hover:text-[#0e3d61]  hover:border-[#0e3d61]"}`} >
                                        {link.name}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}
