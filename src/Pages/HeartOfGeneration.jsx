import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const HeartOfGeneration = () => {
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
            <div>
                <div className="bg-green-800 dark:bg-gray-900 font-poppins">
                    <div className="max-w-6xl px-4 mx-auto">
                        <nav className="flex items-center justify-between py-4">
                            <Link to="/">
                                <h1 className="text-3xl font-sans font-bold text-white">Heart of Generations</h1>
                            </Link>
                            {isScrolled ? (
                                <div className="w-32 mt-1 ml-10 overflow-hidden rounded md:mx-auto md:mb-0">
                                    <div className="flex-1 h-2 bg-blue-200"></div>
                                    <div className="flex-1 h-2 bg-blue-400"></div>
                                    <div className="flex-1 h-2 bg-blue-300"></div>
                                </div>
                            ) : null}
                        </nav>
                    </div>
                </div>

                <div className="container mx-auto text-center p-8">
                    <section className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 md:pt-32 md:col-span-1">
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                <p className="text-2xl font-semibold text-center mb-6">
                                    Bringing Love and Hope to Impoverished Regions
                                </p>
                                <p className="text-lg text-gray-700">
                                    Welcome to Heart of Generations, a non-denominational mission agency dedicated to bringing love and hope to unreached people in impoverished regions of the world. Our mission is to make a positive impact on the lives of those in desperate need by providing essential support, education, and assistance. Here's a brief summary of what we do.
                                </p>
                            </div>
                        </div>

                        <div className="col-span-3 md:col-span-2 grid grid-cols-2 gap-6">
                            <div className="col-span-2">
                                <div className="bg-white rounded-lg shadow-lg p-4">
                                    <h2 className="text-2xl font-semibold text-primary-color">
                                        Our Objectives
                                    </h2>
                                    <ul className="list-disc pl-6 text-lg text-gray-700">
                                        <li className="mb-4">Alleviate poverty and suffering in impoverished regions.</li>
                                        <li className="mb-4">Provide access to quality education and healthcare.</li>
                                        <li className="mb-4">Support needy families and communities with food programs.</li>
                                        <li className="mb-4">Offer scholarships to underprivileged individuals.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-span-2">
                                <div className="bg-white rounded-lg shadow-lg p-4">
                                    <h2 className="text-2xl font-semibold text-primary-color">
                                        Get Involved
                                    </h2>
                                    <p className="text-lg text-gray-700">
                                        If you're interested in joining our mission or supporting our cause, you can get involved in various ways:
                                    </p>
                                    <ul className="pl-6 text-lg text-gray-700">
                                        <li className="mb-4">
                                            <Link to="/fullpartnership">
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white hover:text-white px-6 py-3 rounded-full md:px-8 md:py-4 lg:px-10 lg:py-5">
                                                    Full-time partnerships
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="/shortPartnership">
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white hover:text-white px-6 py-3 rounded-full md:px-8 md:py-4 lg:px-10 lg:py-5">
                                                    Short-term projects
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="/sponsorAchild">
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white hover:text-white px-6 py-3 rounded-full md:px-8 md:py-4 lg:px-10 lg:py-5">
                                                    Sponsor a child
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="/foodProgrammes">
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white hover:text-white px-6 py-3 rounded-full md:px-8 md:py-4 lg:px-10 lg:py-5">
                                                    Give to our food programs
                                                </button>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link to="/donatenow">
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white hover:text-white px-6 py-3 rounded-full md:px-8 md:py-4 lg:px-10 lg:py-5">
                                                    Donate
                                                </button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default HeartOfGeneration;
