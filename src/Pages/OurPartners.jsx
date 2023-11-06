import React, {useEffect, useState} from "react";
import partner1 from '../assets/MainImages/logo.png';
import FullPartnership from "./FullPartnership.jsx";

const OurPartners = () => {
    const partners = [
        { name: 'Partner 1', logo: partner1 },
        { name: 'Partner 2', logo: partner1 },
        { name: 'Partner 3', logo: partner1 },
        { name: 'Partner 4', logo: partner1 },
        // Add more partners as needed
    ];

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
                        <h1 className="text-3xl font-sans text-left md:text-center pl-8 md:pl-0 font-bold">Our Partners</h1>
                    </div>
                    {isScrolled ? (
                        <div className="flex w-32 mt-1 ml-10 overflow-hidden rounded md:mx-auto md:mb-0">
                            <div className="flex-1 h-2 bg-blue-200"></div>
                            <div className="flex-1 h-2 bg-blue-400"></div>
                            <div className="flex-1 h-2 bg-blue-300"></div>
                        </div>
                    ) : null}
                </div>
                <div className="bg-gray-100 pb-12">
                    <div className='bg-pure-white pb-4'>
                        <p className='px-4 md:px-64 text-center py-8'>We invite you to become part of our community and collaborate with us to address some of the world's most urgent challenges alongside those who require assistance. Join forces with us to make a difference in the lives of underprivileged youth in Kenya.</p>
                    </div>
                    <div className="p-4 rounded-lg">
                        <h1 className='text-4xl text-center font-extrabold font-sans text-primary-color text-opacity-80 mt-8 mb-3'>They have faith in us</h1>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 lg:px-8">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {partners.map((partner, index) => (
                                <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
                                    <img src={partner.logo} alt={partner.name} className="h-16 sm:h-20 mb-2" />
                                    <p className="text-sm text-gray-800 font-medium">{partner.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <FullPartnership/>
            </div>
        </>
    )
}
export default OurPartners;
