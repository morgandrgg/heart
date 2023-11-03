import '../../Styles/Footer.css'
import logo from '../../assets/MainImages/logo.png'
import {Link} from "react-router-dom";

const Footer = ()=>{
    return(<>
            <footer className="bg-blue-950">
                <div className='Home-module'></div>
                <div className='justify-center  wavy-border'>
                    <div className='justify-center bg-blue-300 dark:bg-pure-white wavy-nest'>
                        <div className="z-30 relative flex items-center justify-center md:flex-start w-full h-full overflow-auto">
                            <div className="p-4  rounded-lg">
                                <h1 className='text-4xl text-center font-semibold text-neutral-black mt-8 mb-3'>Follow Us</h1>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-wrap justify-center  gap-8 mx-5'>
                            <div className='p-6 w-72 bg-amber-50 rounded-lg font-semibold text-center shadow-xl'><h4>Stay Tuned</h4></div>
                            <div className='p-6 w-96 bg-amber-100 rounded-lg shadow-2xl'>
                                <ul className="col-span-2 flex justify-center gap-6 lg:col-span-5 lg:justify-center">
                                    <li>
                                        <a href="/" rel="noreferrer" target="_blank" className="text-blue-600 transition hover:opacity-75">
                                            <span className="sr-only">Facebook</span>

                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/" rel="noreferrer" target="_blank" className="text-blue-600 transition hover:opacity-75 ">
                                            <span className="sr-only">Instagram</span>

                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/" rel="noreferrer" target="_blank" className="text-blue-600 transition hover:opacity-75 ">
                                            <span className="sr-only">X</span>

                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='p-6 w-72 bg-amber-50 rounded-lg font-semibold text-center shadow-xl'><h4>Stay Tuned</h4></div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="lg:flex md:items-start md:gap-8">
                        <div className="mt-8 md:ml-12 grid grid-cols-2 gap-8 lg:mt-0 md:grid-cols-5 md:gap-y-16">
                            <div className="col-span-2">
                                <div>
                                    <div className='ml-28 mt-2'>
                                        <img src={logo} alt={logo} className=" h-20 w-24 bg-pure-white rounded-2xl object-contain md:h-40 md:w-52 md:object-contain md:bg-pure-white md:rounded-2xl"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 flex md:flex-row flex-wrap lg:col-span-3 lg:flex lg:items-end pb-2">
                                <div className="md:mr-20">
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-color">
                                            Get the latest news!
                                        </h2>

                                        <p className="mt-4 text-gray-50 dark:text-dark-slate">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
                                            cupiditate quae nam molestias.
                                        </p>
                                    </div>
                                </div>
                                <form className="w-full md:mr-20">
                                    <label htmlFor="UserEmail" className="sr-only"> Email </label>

                                    <div className="border border-pure-white p-2  sm:flex sm:items-center sm:gap-4">
                                        <input type="email" id="UserEmail" placeholder="john@rhcp.com"
                                            className="w-full border-pure-white text-dark-gray h-16 pl-6  sm:text-sm"/>

                                        <button className="mt-1 w-full bg-blue-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-blue-700 sm:mt-0 sm:w-auto sm:shrink-0">
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <p className="text-yellow-500 hover:opacity-75 font-bold ">Heart  Of Generation</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            Location
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            PO BOX
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            Accounts Review
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            HQ
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <p className="text-yellow-500 hover:opacity-75 font-bold">Join The team</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            Full Time Partnerships
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            Short Time Projects
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <p className="text-yellow-500 hover:opacity-75 font-bold">Helpful Links</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            Contact
                                        </a>
                                    </li>

                                    <li>
                                        <Link to='/faq' className="text-pure-white hover:text-light-blue transition-all">FAQS</Link>
                                    </li>

                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            Live Chat
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <p className="text-yellow-500 hover:opacity-75 font-bold">Our Organization</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            Our Story
                                        </a>
                                    </li>
                                    </ul>
                                    <ul className='mt-6 space-y-4 text-sm'>
                                    <p className="text-yellow-500 hover:opacity-75 font-bold">Contact Us</p>
                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            +2547 00 000 000
                                        </a>
                                    </li>
                                        <li>
                                            <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                                info@heart.com
                                            </a>
                                        </li>

                                </ul>
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <p className="text-yellow-500 hover:opacity-75 font-bold">Give online</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            Sponsor a Child
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            Give to missionary
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            Food Programmes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                            Heart of Generation
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
                        <div className="sm:flex sm:justify-between">
                            <p className="text-xs text-pure-white dark:text-gray-400">
                                &copy; 2023. Company Name. All rights reserved.
                            </p>

                            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                                <li>
                                    <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                        Terms & Conditions
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                        Privacy Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-pure-white hover:text-light-blue transition-all">
                                        Cookies
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer