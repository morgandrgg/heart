import heartOfGenerationImage from '../assets/MainImages/1697108167093.jpg'
import React, {useEffect, useState} from "react";

const AboutUs=()=>{
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
        <div>
            <section className="flex  font-poppins dark:bg-dark-gray ">
                {/*bg-primary-color bg-opacity-80 text-pure-white*/}
                {/*bg-white text-neutral-black*/}
                <div className="justify-center flex-1 py-16 md:py-20">
                    <div className={`transition-colors ${isScrolled ? 'bg-white text-neutral-black' : 'bg-primary-color bg-opacity-80 text-pure-white'} py-6 rounded-br-3xl rounded-bl-3xl`}>
                        <div className="container mx-auto text-center">
                            <h1 className="text-3xl font-sans font-bold">About Heart of Generation</h1>
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

                    <div className="">
                        <div className="container mx-auto p-4">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full md:w-1/2 p-4">
                                    <p className="text-lg text-justify mb-4">
                                        Heart of Generation is a community-based organization that is dedicated to providing food and assistance to needy families. We have formed a network to partner with like-minded ministries, and our mission is to bring love and hope to unreached people in impoverished regions of the world.
                                    </p>
                                    <p className="text-lg text-justify mb-4">
                                        Our organization operates several ministries, especially in the Nairobi area of Kenya, where we focus on meeting the physical and spiritual needs of those living in desperate poverty in slums. We provide assistance through the provision of food, training, and scholarships.
                                    </p>
                                    <p className="text-lg text-justify mb-4">
                                        At Heart of Generation, we prioritize reaching out to those whom the world might consider to be the "least." We believe in the words of Jesus from Matthew 25:40: "I tell you the truth, whatever you did for one of the least of these brothers and sisters of mine, you did for me."
                                    </p>
                                    <p className="text-lg text-justify mb-4">
                                        We invite you to partner with us in this mission. Whether you are interested in full-time partnerships, short-term projects, or contributing to our various programs, such as sponsoring a child, supporting a missionary, providing disaster relief, or contributing to our food programs, there are many ways to get involved.
                                    </p>
                                    <p className="text-lg text-justify">
                                        If you feel called to serve the people of Kenya and share our passion for making a positive impact, we want you on our team.
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2 p-4">
                                    <img
                                        src={heartOfGenerationImage}
                                        alt="Heart of Generation"
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 py-8 px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold mb-4 text-primary-color text-opacity-80">Our Mission</h2>
                            <p className="text-lg text-gray-700 text-justify mb-8">
                                At Heart of Generation, our mission is to provide essential resources and support to underprivileged communities, fostering a sense of hope and empowerment to those in need.
                            </p>
                            <h2 className="text-3xl font-extrabold mb-4 text-primary-color text-opacity-80">Our Vision</h2>
                            <p className="text-lg text-justify text-gray-700">
                                Our vision is to create a world where every individual has access to basic necessities and opportunities for personal growth, irrespective of their socio-economic background or geographic location.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default AboutUs