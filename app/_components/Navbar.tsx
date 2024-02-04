'use client'

import Image from "next/image"
import Link from "next/link"

import { usePathname } from 'next/navigation'

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Navbar() {

    const pathname = usePathname()

    return (
        <nav className="sticky top-0 z-50 txt-white shadow-sm">

            <div className="bg-base-100 flex flex-col">

                {/* top bar */}
                    <div className="w-full min-width bg-primary-dark h-18 p-4 flex flex-col md:flex-row items-start font-semibold">
                        <span className="flex mr-4 text-white items-center mb-2 sm:mb-0 text-sm sm:text-all">
                            <BsFillTelephoneFill className="w-[14px] h-[14px] mr-2" />
                            08069371264
                        </span>
                        <span className="flex mr-4 text-white  items-center text-sm sm:text-all">
                            <MdEmail size={14} className="w-[14px] h-[14px] mr-2" />St.michaelthearchangelacademymakurdi2@gmail.com
                        </span>
                    </div>


                {/* navbar */}
                <div className="w-full flex justify-between p-4 items-center">
                    {/* Logo */}
                    <div className="flex justify-between w-fit items-center">
                        <Link href='/' className="object-cover text-all mr-2">
                            <Image src="/images/logo.jpg" alt="Logo" width={48} height={48} />
                        </Link>
                        <div className='flex flex-col items-center justify-center'>
                            <span className="font-bold uppercase text-all text-center inline tracking-tight">St Michael the Arch Angel academy</span>
                            <span className="xs:text-xs sm:text-sm md:text-base uppercase sm:font-semibold  text-center">Acadmeny, Makurdi</span>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="hidden lg:block w-fit">
                        <ul className="menu menu-horizontal text-all">
                            <li className={pathname === '/' ? 'bg-[#e0e0e0]' : ''}>
                                <Link href='/' className={`capitalize hover:font-extrabold ${pathname === '/' ? 'font-bold' : 'font-semibold'}`}>Home</Link>
                            </li>
                            <li className={pathname === '/the-school' || pathname === '/welcome' ? 'bg-[#e0e0e0]' : 'font-semibold'}>
                                <details>
                                    <summary className="capitalize">
                                        about
                                    </summary>
                                    <ul className="bg-base-100 rounded-t-none min-w-[150px] capitalize z-30">
                                        <li>
                                            <Link href='/welcome' className={`capitalize hover:font-extrabold w-max ${pathname === '/welcome' ? 'font-bold' : 'font-semibold'}`}>
                                                welcome note
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/the-school' className={`capitalize hover:font-extrabold ${pathname === '/the-school' ? 'font-bold' : 'font-semibold'}`}>
                                                the school
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li className={pathname === '/admission-process' ? 'bg-[#e0e0e0]' : ''}>
                                <Link href='/admission-process' className={`capitalize hover:font-extrabold ${pathname === '/admission-process' ? 'font-bold' : 'font-semibold'}`}>
                                    admission
                                </Link>
                            </li>
                            <li className={pathname === '/blog' ? 'bg-[#e0e0e0]' : ''}>
                                <Link href='/blog' className={`capitalize hover:font-extrabold ${pathname === '/blog' ? 'font-bold' : 'font-semibold'}`}>
                                    news/blog
                                </Link>
                            </li>
                            <li className={pathname === '/contact' ? 'bg-[#e0e0e0]' : ''}>
                                <Link href='/contact' className={`capitalize hover:font-extrabold ${pathname === '/contact' ? 'font-bold' : 'font-semibold'}`}>
                                    contact
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Hamburger Menu */}
                    <div className="drawer drawer-end block lg:hidden justify-end w-fit z-50">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Hamburger Icon */}
                            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-primary-dark text-white max-w-[320px]">
                                <li><Link href='/' className="side-link p-4 font-semibold mb-1 text-base">Home</Link></li>
                                <li className="mb-1 text-base">
                                    <details className="group">
                                        <summary className="p-4 font-semibold side-link flex justify-between items-center group-hover:text-gray-300">
                                            About
                                        </summary>
                                        <ul className="bg-gray-700 rounded-md mt-2 p-2">
                                            <li><Link href='/welcome' className="side-link block p-4 hover:bg-gray-600 rounded-md font-semibold text-base">Welcome Note</Link></li>
                                            <li><Link href='/the-school' className="side-link block p-4 hover:bg-gray-600 rounded-md font-semibold text-base">The School</Link></li>
                                        </ul>
                                    </details>
                                </li>
                                <li><Link href='/admission-process' className="side-link p-4 font-semibold mb-1 text-base">Admission</Link></li>
                                <li><Link href='/blog' className="side-link p-4 font-semibold mb-1 text-base">News/Blog</Link></li>
                                <li><Link href='/contact' className="side-link p-4 font-semibold mb-1 text-base">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar