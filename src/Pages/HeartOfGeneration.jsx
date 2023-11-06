import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const HeartOfGeneration = () =>{
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <>
            <div>
                <div className="bg-pure-white py-16 md:py-20">
                    <div className={`transition-colors ${isScrolled ? 'bg-white text-primary-color' : 'bg-primary-color bg-opacity-80 text-pure-white'} py-6 rounded-br-3xl rounded-bl-3xl`}>
                        <div className="container mx-auto text-center">
                            <h1 className="text-3xl font-sans font-bold">Heart of Generations</h1>
                        </div>
                        {isScrolled ? (
                            (
                                <div className="flex w-32 mt-1 ml-10 overflow-hidden rounded md:mx-auto md:mb-0">
                                    <div className="flex-1 h-2 bg-blue-200">
                                    </div>
                                    <div className="flex-1 h-2 bg-blue-400">
                                    </div>
                                    <div className="flex-1 h-2 bg-blue-300">
                                    </div>
                                </div>
                            )
                        ) : null}
                    </div>
                   <div className='md:mx-96 pl-3 align-middle pr-0 items-center justify-center'>
                       <section className="p-4 w-96 bg-white rounded-lg shadow-lg mb-6">
                           <p className="text-lg text-center mb-6">
                               Bringing Love and Hope to Impoverished Regions
                           </p>

                           {/* Add summary content here */}
                           <div className="p-4  bg-gray-200 rounded-lg">
                               <p className="text-lg text-center text-gray-700">
                                   Welcome to Heart of Generations, a non-denominational mission agency dedicated to bringing love and hope to un-reached people in impoverished regions of the world. Our mission is to make a positive impact on the lives of those in desperate need by providing essential support, education, and assistance. Here's a brief summary of what we do.
                               </p>
                           </div>
                       </section>

                       <section className="p-4 w-96 bg-white rounded-lg shadow-lg mb-6">
                           <h2 className="text-2xl font-semibold text-primary-color">
                               Our Objectives
                           </h2>
                           <ul className="list-disc pl-6">
                               <li className="text-lg text-gray-700 mb-4">
                                   Alleviate poverty and suffering in impoverished regions.
                               </li>
                               <li className="text-lg text-gray-700 mb-4">
                                   Provide access to quality education and healthcare.
                               </li>
                               <li className="text-lg text-gray-700 mb-4">
                                   Support needy families and communities with food programs.
                               </li>
                               <li className="text-lg text-gray-700 mb-4">
                                   Offer scholarships to underprivileged individuals.
                               </li>
                           </ul>
                       </section>

                       <section className="p-4 bg-white rounded-lg shadow-lg w-96 items-center">
                           <h2 className="text-2xl font-semibold text-primary-color">
                               Get Involved
                           </h2>
                           <p className="text-lg text-gray-700">
                               If you're interested in joining our mission or supporting our cause, you can get involved in various ways:
                           </p>
                           <ul className=" pt-2 pl-6">
                               <li className="text-lg text-gray-700 mb-4">
                                   <Link to='/fullpartnership'>
                                       <button className='bg-blue-600 hover:bg-blue-700 text-pure-white  hover:text-pure-white px-6 py-2 rounded-full md:px-8 md:py-3 lg:px-10 lg:py-4'>
                                           Full-time partnerships
                                       </button>
                                   </Link>
                               </li>
                               <li className="text-lg text-gray-700 mb-4">

                                   <Link to='/shortPartnership'>
                                       <button className='bg-blue-600 hover:bg-blue-700 text-pure-white  hover:text-pure-white px-6 py-2 rounded-full md:px-8 md:py-3 lg:px-10 lg:py-4'>
                                           Short-term projects
                                       </button>
                                   </Link>
                               </li>
                               <li className="text-lg text-gray-700 mb-4">
                                   <Link to='/sponsorAchild'>
                                       <button className='bg-blue-600 hover:bg-blue-700 text-pure-white  hover:text-pure-white px-6 py-2 rounded-full md:px-8 md:py-3 lg:px-10 lg:py-4'>
                                           Sponsor a child
                                       </button>
                                   </Link>
                               </li>
                               <li className="text-lg text-gray-700 mb-4">
                                   <Link to='/foodProgrammes'>
                                       <button className='bg-blue-600 hover:bg-blue-700 text-pure-white  hover:text-pure-white px-6 py-2 rounded-full md:px-8 md:py-3 lg:px-10 lg:py-4'>
                                           Give to our food programs
                                       </button>
                                   </Link>
                               </li>
                               <li className="text-lg text-gray-700 mb-4">
                                   <Link to='/donatenow'>
                                       <button className='bg-blue-600 hover:bg-blue-700 text-pure-white  hover:text-pure-white px-6 py-2 rounded-full md:px-8 md:py-3 lg:px-10 lg:py-4'>
                                           Donate
                                       </button>
                                   </Link>
                               </li>
                           </ul>
                       </section>
                   </div>
                </div>
            </div>
        </>
    )
}
export default HeartOfGeneration