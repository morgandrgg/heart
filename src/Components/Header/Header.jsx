import {Link} from 'react-router-dom';
import HeaderLinks from './HeaderLinks';
import {useEffect, useState} from 'react';
import Logo from '../../assets/MainImages/logo.png';

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
        <nav className='fixed w-full bg-slate-color z-50'>
            <div className='flex items-center font-medium justify-around'>
                <div className='z-50 p-1 md:w-auto w-full flex justify-between'>
                    <Link to='/' className='pl-4'>
                        <img src={Logo} alt={Logo} className='cursor-pointer h-16 w-16 object-contain' />
                    </Link>
                    <div className='pt-3 pb-1'>
                        <button className='bg-light-blue hover:dark-blue  text-pure-white  hover:text-pure-white px-10 py-2 rounded-full md:hidden'>
                            <Link to='/donatenow'>Donate Now</Link>
                        </button>
                    </div>
                    <div className='md:hidden text-3xl cursor-pointer mt-3 pr-5' onClick={() => setOpen(!open)}>
                        {`${open ? '✕' : '☰'}`}
                    </div>
                </div>
                <ul className='md:flex hidden uppercase items-center gap-8 font-sans'>
                    <li>
                        <Link to='/' className='py-7 px-3 inline-block hover:bg-medium-blue hover:text-pure-white'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/aboutus' className='py-7 px-3 inline-block hover:bg-medium-blue hover:text-white'>
                            About Us
                        </Link>
                    </li>
                    <HeaderLinks />
                </ul>
                <div className='md:block hidden'>
                    <button className='bg-light-blue hover:bg-dark-blue  text-pure-white  hover:text-pure-white px-6 py-2 rounded-full'>
                        <Link to='/donatenow'>Donate Now</Link>
                    </button>
                </div>
                {/*-----------Mobile Menu----------*/}
                <ul className={`md:hidden bg-slate-color fixed w-full z-10 top-0 font-sans overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                    <li>
                        <div className='flex flex-col pl-3'>
                            <Link to='/' className='mobile-menu-link py-7 px-3 inline-block hover:w-screen hover:bg-blue-600 hover:text-pure-white'>
                                Home
                            </Link>
                            <Link to='/aboutus' className='mobile-menu-link py-7 px-3 inline-block hover:w-screen hover:bg-blue-600 hover:text-pure-white'>
                                About us
                            </Link>
                        </div>
                    </li>
                    <HeaderLinks />
                    <div className='py-5'>
                        <Link to='/donatenow'>
                            <button className='bg-light-blue hover:bg-dark-blue  text-white  hover:text-white px-6 py-2 rounded-full'>
                               Donate Now
                            </button>
                        </Link>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
