import Image from "next/image"
import Link from "next/link"

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


type Props = {}

function Navbar({ }: Props) {
    return (
        <nav className="navbar bg-base-100 flex flex-col max-width min-w-[360px]">

            {/* top bar */}
            <div className="bg-top w-full h-18 md:h-14 p-4 flex flex-col md:flex-row items-start">
                <span className="flex mr-4 text-white text-xs sm:text-sm items-center mb-2 sm:mb-0">
                    <BsFillTelephoneFill className="w-[14px] h-[14px] mr-2" />
                    08069371264
                </span>
                <span className="flex mr-4 text-white text-xs sm:text-sm items-center">
                    <MdEmail size={14} className="w-[14px] h-[14px] mr-2" />St.michaelthearchangelacademymakurdi2@gmail.com
                </span>
            </div>

            {/* navbar */}
            <div className="w-full flex justify-between p-4 items-center">
                {/* Logo */}
                <div className="flex justify-between w-fit items-center">
                    <Link href='/' className="object-cover text-xl mr-2">
                        <Image src="/images/logo.jpg" alt="Logo" width={48} height={40} />
                    </Link>
                    <div className='flex flex-col items-center justify-center'>
                        <span className="font-bold uppercase text-xs md:text-base text-center inline">St Michael the Arch Angel academy</span>
                        <span className="text-xs md:text-sm uppercase sm:font-semibold  text-center">Acadmeny, Makurdi</span>
                    </div>
                </div>

                {/* Menu */}
                <div className="hidden lg:block w-fit mx-4">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/' className="nav-link hover:font-bold">Home</Link ></li>
                        <li>
                            <details>
                                <summary className="nav-link">
                                    about
                                </summary>
                                <ul className="bg-base-100 rounded-t-none min-w-[150px] capitalize">
                                    <li><Link href='/welcome' className="hover:font-bold w-full">welcome note</Link></li>
                                    <li><Link href='/the-school' className="hover:font-bold w-full">the school</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href='/admission-process' className="nav-link hover:font-bold">admission</Link ></li>
                        <li><Link href='/blog' className="nav-link hover:font-bold">news/blog</Link ></li>
                        <li><Link href='/contact' className="nav-link hover:font-bold">contact</Link ></li>
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
                        <ul className="menu p-4 w-80 min-h-full bg-gray-700 text-white max-w-[300px]">
                            <li><Link href='/' className="side-link">Home</Link></li>
                            <li>
                                <details className="group">
                                    <summary className="side-link flex justify-between items-center group-hover:text-gray-300">
                                        About
                                    </summary>
                                    <ul className="bg-gray-700 rounded-md mt-2">
                                        <li><Link href='/welcome' className="side-link block px-4 hover:bg-gray-600 rounded-md">Welcome Note</Link></li>
                                        <li><Link href='/the-school' className="side-link block px-4 hover:bg-gray-600 rounded-md">The School</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link href='/admission-process' className="side-link">Admission</Link></li>
                            <li><Link href='/blog' className="side-link">News/Blog</Link></li>
                            <li><Link href='/contact' className="side-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>

            </div>


        </nav>
    )
}

export default Navbar