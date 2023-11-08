import heroImage from '../assets/MainImages/1696322441843.jpg';
import sponsorImage from '../assets/MainImages/1697108082037.jpg';
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import SponsorshipGallery from "../Components/Gallery/SponsorshipGallery.jsx";

const SponsorAchild = () =>{
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
        "<b>Transforming a Child's Life: Child sponsorship offers " +
        "an opportunity to make a profound and lasting impact on a child's" +
        " life. By providing financial support for their education, healthcare," +
        " and nutrition, sponsors help break the cycle of poverty. Sponsors enable children" +
        " to access quality education, receive proper healthcare, and enjoy a better standard " +
        "of living. This support empowers children with the tools they need to create a brighter future" +
        " for themselves and their communities.",

        "<b>Personal Fulfillment and Connection: Child sponsorship is a deeply rewarding experience for" +
        " sponsors as well. It allows individuals or families to connect with a child in need on a personal " +
        "level. Sponsors receive updates and letters from the child they support, creating a unique bond that " +
        "transcends geographical boundaries. The act of giving and witnessing the positive changes in the child's " +
        "life can bring a sense of fulfillment and joy that is truly priceless."
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
                        <div className={`  mt-10 transition-colors ${isScrolled ? 'bg-white bg-opacity-80 text-neutral-black' : 'bg-primary-color bg-opacity-80 text-pure-white'} py-6 rounded-br-3xl rounded-bl-3xl`}>
                            <div className="container mx-auto text-center">
                                <h1 className="text-4xl font-bold">Sponsor a Child</h1>
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
                            Together, we can make a difference in the lives of children in need.
                        </p>
                    </div>
                </div>

                {/* Sponsorship Details section */}
                <div className="container mx-auto p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column: Sponsorship Information */}
                        <div>
                            <h2 className="text-3xl font-semibold mb-4">Why Sponsor a Child?</h2>
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

                        {/* Right Column: Sponsorship Image */}
                        <div>
                            <img src={sponsorImage } alt="Sponsorship Image" className="w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-medium-blue bg-opacity-50 text-white py-16 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Ready to Make a Difference?</h2>
                    <p className="text-lg mb-4 text-dark-gray">
                        Your support can transform a child's life. Sponsor a child today and be part of our mission
                        to provide a better future.
                    </p>
                    <Link to='/donatenow'>
                        <button className='bg-light-blue hover:bg-dark-blue  text-white  hover:text-white px-6 py-2 rounded-full'>
                            Donate Now
                        </button>
                    </Link>
                </div>
                <div className='mb-6'>
                    <SponsorshipGallery/>
                </div>
            </div>
        </>
    )
}
export default SponsorAchild