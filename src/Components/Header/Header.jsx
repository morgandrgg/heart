import { Link } from 'react-router-dom';
import HeaderLinks from './HeaderLinks';
import { useState, useEffect } from 'react';
import Logo from '../../assets/MainImages/Logo.png';

const Header = () => {
    const [open, setOpen] = useState(false);

    // Function to close the mobile menu
    const closeMobileMenu = () => {
        setOpen(false);
    };

    // Add a click event listener to each Link inside the mobile menu
    useEffect(() => {
        if (open) {
            const linkElements = document.querySelectorAll('.mobile-menu-link');

            linkElements.forEach((element) => {
                element.addEventListener('click', closeMobileMenu);
            });

            return () => {
                linkElements.forEach((element) => {
                    element.removeEventListener('click', closeMobileMenu);
                });
            };
        }
    }, [open]);

    return (
        <nav className='fixed w-full bg-amber-100 z-50'>
            <div className='flex items-center font-medium justify-around'>
                <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
                    <Link to='/'>
                        <img src={Logo} alt='Logo' className='cursor-pointer h-14 w-14 object-contain' />
                    </Link>
                    <div className='md:hidden text-3xl cursor-pointer mt-2' onClick={() => setOpen(!open)}>
                        {`${open ? '✕' : '☰'}`}
                    </div>
                </div>
                <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block hover:bg-pink-900 hover:text-white'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/aboutus' className='py-7 px-3 inline-block hover:bg-pink-900 hover:text-white'>
                            About Us
                        </Link>
                    </li>
                    <HeaderLinks />
                </ul>
                <div className='md:block hidden'>
                    <button className='bg-blue-500 text-white px-6 py-2 rounded-full'>
                        <Link to='/donatenow'>Donate Now</Link>
                    </button>
                </div>
                {/*-----------Mobile Menu----------*/}
                <ul className={`md:hidden bg-white fixed w-full z-10 top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                    <li>
                        <div className='flex flex-col'>
                            <Link to='/' className='mobile-menu-link py-7 px-3 inline-block hover:w-screen hover:bg-yellow-500 hover:text-white'>
                                Home
                            </Link>
                            <Link to='/aboutus' className='mobile-menu-link py-7 px-3 inline-block hover:w-screen hover:bg-yellow-500 hover:text-white'>
                                About us
                            </Link>
                        </div>
                    </li>
                    <HeaderLinks />
                    <div className='py-5'>
                        <button className='bg-blue-500 text-white px-6 py-2 rounded-full'>
                            <Link to='/donatenow'>Donate Now</Link>
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
