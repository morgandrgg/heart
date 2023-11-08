import heroImage from '../assets/MainImages/1696322662250.jpg';
import sponsorImage from '../assets/MainImages/1696322464715.jpg';
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import MissionaryGallery from "../Components/Gallery/MissionaryGallery.jsx";

const GiveToMissionary= () =>{
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

    const reasons = [
        "<b>Spread the Gospel: Supporting missionaries enables the spread of the message of faith" +
        " and hope to unreached and underserved communities, giving more people the opportunity to hear and embrace the Gospel.",

        "<b>Meet Basic Needs: Missionaries often work in areas with limited access to necessities like food, clean " +
        "water, and healthcare. Donations help provide for these basic needs and improve the quality of life for those in need.",


        "<b>Promote Education: Many missionary organizations run educational programs, offering children and adults the" +
        " chance to learn to read and write, acquire valuable skills, and break free from the cycle of poverty.",


        "<b>Empower Local Communities: By supporting missionaries, you're empowering local communities to become " +
        "self-sufficient and transform their own lives. Missionary projects can include vocational training, business " +
        "development, and other initiatives that foster independence and growth."
    ];

    const [expandedReasonIndex, setExpandedReasonIndex] = useState(-1);

    const toggleDescription = (index) => {
        if (expandedReasonIndex === index) {
            setExpandedReasonIndex(-1);
        } else {
            setExpandedReasonIndex(index);
        }
    };

    return(
        <>
            <div className="bg-gray-100">
                {/* Hero section with a background image */}
                <div className="relative h-96 text-white flex items-center justify-center" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'260px' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="text-center relative z-10 w-screen">
                        <div className={`mt-10 transition-colors ${isScrolled ? 'bg-white bg-opacity-80 text-neutral-black' : 'bg-primary-color bg-opacity-80 text-pure-white'} py-6 rounded-br-3xl rounded-bl-3xl`}>
                            <div className="container mx-auto text-center">
                                <h1 className="text-4xl font-bold">Give to missionary</h1>
                            </div>
                            {isScrolled ? (
                                (
                                    <div className="flex pl-8 md:pl-0 w-32 mt-1 ml-10 overflow-hidden rounded md:mx-auto md:mb-0">
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

                        <p className="text-lg mt-4">
                            Through mission we can transform the lives of youths
                        </p>
                    </div>
                </div>

                {/* Sponsorship Details section */}
                <div className="container mx-auto p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column: Sponsorship Information */}
                        <div>
                            <img src={sponsorImage } alt="Sponsorship Image" className="w-full h-auto rounded-lg"/>
                        </div>
                        {/* Right Column: Sponsorship Image */}
                        <div>
                            <h2 className="text-3xl font-semibold mb-4">Why support the missions?</h2>
                            <div className="p-8 rounded-lg px-3 -mt-10 md:-mt-0">
                                <ul>
                                    {reasons.map((reason, index) => (
                                        <li key={index} className="py-2 text-light-gray border-t border-solid border-dark-slate last:border-b">
                                            <div className="flex items-center cursor-pointer" onClick={() => toggleDescription(index)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-primary-color inline mr-2 transform ${expandedReasonIndex === index ? "rotate-90" : "rotate-0"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                                </svg>
                                                <span dangerouslySetInnerHTML={{ __html: reason.split(":")[0] }}></span>
                                            </div>
                                            {expandedReasonIndex === index && (
                                                <p>{reason.split(":")[1]}</p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-medium-blue bg-opacity-50 text-white py-16 text-center -mb-14">
                    <h2 className="text-3xl font-semibold mb-4">Ready to Make a Difference?</h2>
                    <p className="text-lg mb-4 text-dark-gray">
                        Your support can transform motivate the present and the future missions. Sponsor a our missionary team
                        to provide a better future.
                    </p>
                    <Link to='/donatenow'>
                        <button className='bg-light-blue hover:bg-dark-blue  text-white  hover:text-white px-6 py-2 rounded-full'>
                            Donate Now
                        </button>
                    </Link>
                </div>
                <div className='mb-6'>
                    <MissionaryGallery/>
                </div>
            </div>
        </>
    )
}
export default GiveToMissionary