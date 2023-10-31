import {Link} from 'react-router-dom'
import HeaderLinks from "./HeaderLinks";
import {useState} from "react";
const Header = () => {
    const  [open, setOpen] = useState(false)
    return (
        <nav className='fixed w-full md:bg-yellow-500 bg-transparent z-50'>
            <div className='flex items-center font-medium justify-around'>
                <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
                    <h1  className='text-2xl cursor-pointer font-bold text-gray-900 py-1 px-2 h-9'>Save</h1>
                    <div className='md:hidden text-3xl cursor-pointer text-white' onClick={()=>setOpen(!open)}>
                        {`${open ? "✕" : "☰"}`}
                    </div>
                </div>
                <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block hover:bg-pink-900 hover:text-white'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block hover:bg-pink-900 hover:text-white'>
                            About Us
                        </Link>
                    </li>
                    <HeaderLinks/>
                </ul>
                <div className='md:block hidden'>
                    <button className='bg-blue-500 text-white px-6 py-2 rounded-full'>
                        Get Started
                    </button>
                </div>
                {/*-----------Mobile Menu----------*/}
                <ul className={`md:hidden bg-white fixed w-full z-10 top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                    <li>
                        <div className='flex flex-col'>
                            <Link to='/' className='py-7 px-3 inline-block hover:w-screen hover:bg-yellow-500 hover:text-white'>
                                Home
                            </Link>
                            <Link to='/' className='py-7 px-3 inline-block hover:w-screen hover:bg-yellow-500 hover:text-white'>
                                About us
                            </Link>
                        </div>

                    </li>
                    <HeaderLinks/>
                    <div className='py-5'>
                        <button className='bg-blue-500 text-white px-6 py-2 rounded-full'>
                            Get Started
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Header