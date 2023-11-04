import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const reason = [
    {
        description: 'Reason1',
    },
    {
        description: 'Reason2',
    },
    {
        description: 'Reason3',
    },
    {
        description: 'Reason4',
    }
]

const FullPartnership = ()=>{
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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        category: 'Corporate Partnership',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to the server or perform any desired actions)
        console.log(formData);
    };

    return(
        <>
            <div className="bg-pure-white py-16 md:py-20">
                <div className={`transition-colors ${isScrolled ? 'bg-white text-neutral-black' : 'bg-primary-color bg-opacity-80 text-pure-white'} py-6 rounded-br-3xl rounded-bl-3xl`}>
                    <div className="container mx-auto text-center">
                        <h1 className="text-3xl font-sans font-bold">Become a full time Partner</h1>
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
                <div className="container mx-auto py-8">
                    <div className="flex flex-col md:flex-row items-center align-middle justify-center md:gap-10 mt-8 px-7">
                        <h2 className="md:text-4xl text-3xl font-sans px-0 md:px-40 -mt-10 md:-mt-0 font-semibold text-neutral-black mb-4 md:mb-0 md:w-1/2">
                            Why Partner with Us?
                        </h2>
                        <div className="p-8 rounded-lg w-96 md:w-1/2 px-3 -mt-10 md:-mt-0">
                            <ul>
                                {reason.map((reasons, index) => (
                                    <li key={index} className="py-2 text-light-gray border-t border-solid border-dark-slate last:border-b">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-color inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                        </svg>
                                        {reasons.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="container mx-auto py-8">
                        <p className="text-2xl text-center font-semibold text-primary-color text-opacity-90 mb-6 px-8 md:px-64">
                            Here are available partnership opportunities. Write to us to propose a partnership and we will be in touch!
                        </p>

                        <div className="flex flex-col  md:flex-row justify-center gap-0 md:gap-8 px-8 md:px-7">
                            <div className=" grid place-content-center">
                                <div className="bg-gradient-to-br from-lighter-gray to-lighter-blue rounded-2xl p-8 text-left h-48 mx-auto">
                                    <h2 className="text-xl font-semibold text-light-pure-white mb-2">Corporate Partnerships</h2>
                                </div>
                                <div className="bg-dark-slate bg-opacity-90 py-6 px-10 text-center rounded-md shadow-lg transform -translate-y-24 sm:-translate-y-">
                                    <p className="text-light-gray">
                                        Join us in making a difference through corporate social responsibility. We offer various partnership opportunities for businesses of all sizes.
                                    </p>
                                    <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12"><div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>Active</span>
                                </div>
                            </div>
                            <div className="grid place-content-center">
                                <div className="bg-gradient-to-br from-lighter-gray to-lighter-blue rounded-2xl p-8 text-left h-48  mx-auto">
                                    <h2 className="text-xl font-semibold text-light-pure-white mb-2">Individual Sponsorships</h2>
                                </div>
                                <div className="bg-dark-slate bg-opacity-90 py-6 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 ">
                                    <p className="text-light-gray">
                                        Make a personal impact by sponsoring a specific cause or program. Your support can change lives and bring hope to those in need.
                                    </p>
                                    <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12"><div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>Active</span>
                                </div>
                            </div>

                            <div className="grid place-content-center">
                                <div className="bg-gradient-to-br from-lighter-gray to-lighter-blue rounded-2xl p-8 text-left h-48  mx-auto">
                                    <h2 className="text-xl font-semibold text-light-pure-white mb-2">Nonprofit Collaborations</h2>
                                </div>
                                <div className="bg-dark-slate bg-opacity-90 py-6 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 ">
                                    <p className="text-light-gray">
                                        We believe in the power of collaboration. If you are a nonprofit organization with a shared mission, let's work together to maximize our impact.
                                    </p>
                                    <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12"><div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>Active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-start md:gap-10 px-4 md:px-16 -mt-10">
                        <h2 className="md:text-4xl text-3xl font-sans py-0 md:py-20 px-0 md:px-8 -mt-8 md:-mt-0 font-semibold text-neutral-black mb-4 md:mb-0 md:w-1/2">
                            How to become a Partner.
                        </h2>
                        <div className="p-8 rounded-lg w-96 md:w-1/2 px-3 -mt-10 md:-mt-0 bg-light-slate shadow">
                            <div className="mb-4">
                                <p className="text-dark-gray text-lg mb-2">1. Write to us on our Email:</p>
                                <a href="mailto:contact@example.com" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Email</a>
                            </div>
                            <div className="mb-4">
                                <p className="text-dark-gray text-lg mb-2">2. Fill out a form, and we will keep in touch:</p>
                                <Link to="/partnershipForm" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Form</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FullPartnership