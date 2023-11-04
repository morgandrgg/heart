import React, {useEffect, useState} from "react";
import Img1 from '../assets/MainImages/1696322564317.jpg'

const ShortPartnership = () => {
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

    return (
        <>
            <div className="bg-pure-white pt-16 md:pt-20">
                <div className={`transition-colors ${isScrolled ? 'bg-white text-neutral-black' : 'bg-primary-color bg-opacity-80 text-pure-white'} py-6 rounded-br-3xl rounded-bl-3xl`}>
                    <div className="container mx-auto text-center">
                        <h1 className="text-3xl font-sans text-left md:text-center pl-8 md:pl-0 font-bold">Partner in short time projects</h1>
                    </div>
                    {isScrolled ? (
                        <div className="flex w-32 mt-1 ml-10 overflow-hidden rounded md:mx-auto md:mb-0">
                            <div className="flex-1 h-2 bg-blue-200"></div>
                            <div className="flex-1 h-2 bg-blue-400"></div>
                            <div className="flex-1 h-2 bg-blue-300"></div>
                        </div>
                    ) : null}
                </div>
                <div className="container mx-auto">
                    <section className="items-center bg-pure-white">
                        <div className="justify-center mx-auto md:px-8 pt-6 md:pt-10 pb-8 md:pb-16">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-0 ">
                                <div className="w-96 p-4 bg-lighter-gray rounded">
                                    <div className  ="relative w-full h-40 mb-2">
                                        <img src={Img1} alt="" className="object-cover w-full h-full rounded"/>
                                        <span className="absolute top-0 right-0 px-2 py-1 mt-2 mr-2 text-xs text-white bg-blue-700">3 months</span>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h2 className="text-lg font-semibold dark:text-gray-300">Food Collection</h2>
                                        </div>
                                        <div className="text-base font-semibold text-green-600">
                                          Collected: Ksh 120,000
                                        </div>
                                    </div>
                                    <div className="flex items-center text-justify mb-2">
                                        <p className="text-x font-medium">
                                            Explore our partnership opportunities. Reach out to us, and let's make a positive impact together!
                                            Explore our partnership opportunities. Reach out to us, and let's make a positive impact together!
                                            Explore our partnership opportunities. Reach out to us, and let's make a positive impact together!
                                            Explore our partnership opportunities. Reach out to us, and let's make a positive impact together!

                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <div className='flex flex-row gap-4'>
                                            <div>
                                                <a href="#" className="px-3 py-2 text-xs text-white bg-blue-800 rounded hover:bg-blue-600">
                                                    Partner
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#" className="px-3 py-2 text-xs text-white bg-blue-800 rounded hover:bg-blue-600">
                                                    See Details
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#" className="px-3 py-2 text-xs text-white bg-blue-800 rounded hover:bg-blue-600">
                                                    Donate
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-96 p-4 bg-lighter-gray rounded">
                                    <div className  ="relative w-full h-40 mb-2">
                                        <img src={Img1} alt="" className="object-cover w-full h-full rounded"/>
                                        <span className="absolute top-0 right-0 px-2 py-1 mt-2 mr-2 text-xs text-white bg-blue-700">3 months</span>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h2 className="text-lg font-semibold dark:text-gray-300">Food Collection</h2>
                                        </div>
                                        <div className="text-base font-semibold text-green-600">
                                            Collected: Ksh 120,000
                                        </div>
                                    </div>
                                    <div className="flex items-center text-justify mb-2">
                                        <p className="text-x font-medium">
                                            Explore our partnership opportunities. Reach out to us, and let's make a positive impact together!
                                            Explore our partnership opportunities. Reach out to us, and let's make a positive impact together!
                                            Explore our partnership opportunities. Reach out to us, and let's make a positive impact together!
                                            Explore our partnership opportunities. Reach out to us, and let's make a positive impact together!

                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <div className='flex flex-row gap-4'>
                                            <div>
                                                <a href="#" className="px-3 py-2 text-xs text-white bg-blue-800 rounded hover:bg-blue-600">
                                                    Partner
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#" className="px-3 py-2 text-xs text-white bg-blue-800 rounded hover:bg-blue-600">
                                                    See Details
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#" className="px-3 py-2 text-xs text-white bg-blue-800 rounded hover:bg-blue-600">
                                                    Donate
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-96 p-4 bg-lighter-gray rounded">
                                    <div className  ="relative w-full h-40 mb-2">
                                        <img src={Img1} alt="" className="object-cover w-full h-full rounded"/>
                                        <span className="absolute top-0 right-0 px-2 py-1 mt-2 mr-2 text-xs text-white bg-blue-700">3 months</span>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h2 className="text-lg font-semibold dark:text-gray-300">Food Collection</h2>
                                        </div>
                                        <div className="text-base font-semibold text-green-600">
                                            Collected: Ksh 120,000
                                        </div>
                                    </div>
                                    <div className="flex items-center text-justify mb-2">
                                        <p className="text-x font-medium">
                                            Explore our partnership opportunities. Reach out to us, and let's make a positive impact together!
                                            Explore our partnership opportunities. Reach out to us, and let's make a positive impact together!
                                            Explore our partnership opportunities. Reach out to us, and let's make a positive impact together!
                                            Explore our partnership opportunities. Reach out to us, and let's make a positive impact together!

                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between ">
                                        <div className='flex flex-row gap-4'>
                                            <div>
                                                <a href="#" className="px-3 py-2 text-xs text-white bg-blue-800 rounded hover:bg-blue-600">
                                                    Partner
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#" className="px-3 py-2 text-xs text-white bg-blue-800 rounded hover:bg-blue-600">
                                                    See Details
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#" className="px-3 py-2 text-xs text-white bg-blue-800 rounded hover:bg-blue-600">
                                                    Donate
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ShortPartnership;
