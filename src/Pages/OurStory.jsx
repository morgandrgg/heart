import story from '../assets/MainImages/1697108144918.jpg'
import React, {useEffect, useState} from "react";

const OurStory = () =>{
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

    const historyData =[
        {
            description: 'Heart of Generations: Our journey began with a mission to address hunger, ' +
                'offering food, training, and scholarships. We expanded our efforts by forming partnerships' +
                ' to help those in desperate poverty, especially in Nairobi, Kenya. Today, we empower communities ' +
                'through education and kindness. Join us in making the world better, one act at a time.'
        }
    ]

    return(<>
        <div>
            <div className="bg-pure-white text-light-gray">
                <div className="py-16 md:py-20 -mb-14">
                    <div className={`transition-colors ${isScrolled ? 'bg-white text-neutral-black' : 'bg-primary-color bg-opacity-80 text-pure-white'} py-6 rounded-br-3xl rounded-bl-3xl`}>
                        <div className="container mx-auto text-center">
                            <h1 className="text-3xl font-sans font-bold text-left md:text-center ml-10 md:ml-0 ">Our Story</h1>
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
                </div>
                <div className="container mx-auto md:py-16 px-6">
                    <div className="flex flex-col md:flex-row items-center justify-evenly gap-20">
                        <div className="md:w-1/2 text-center">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our History</h2>
                            <div className="space-y-6">
                                {historyData.map((item, index) => (
                                    <p key={index} className={`text-lg text-gray-700 ${item.description.length * 0.6 > 100 ? 'md:w-full' : ''}`}>
                                        {item.description}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <img src={story} alt="Our Story" className="opacity-90 hover:opacity-100 w-full h-auto rounded-lg shadow-lg"/>
                        </div>
                    </div>
                </div>

            </div>
        <section className="flex items-center bg-white lg:h-screen dark:bg-gray-800 mt-12">
            <div className="p-4 mx-auto max-w-7xl">
                <div className="mb-20 text-center">
                    <h1 className="text-3xl font-bold dark:text-white -mb-8"> In their Words </h1>
                </div>
                <div className="flex px-5">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className=" mb-10 border-b-4 border-blue-500 ">
                            <div className="relative z-20 pt-8 pb-5 bg-lighter-gray shadow-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     className="absolute top-0 left-0 w-20 h-20 opacity-10" viewBox="0 0 16 16">
                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                                <div className="text-center">
                                    <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                                        <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4">
                                        </div>
                                        <img className="object-cover w-full h-full" src="https://i.postimg.cc/wj9DLCJj/yunming-wang-G9f4-Enb8-XVM-unsplash.jpg" alt=""/>
                                        <div
                                            className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4">
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4 px-3 text-base leading-7 text-dark-gray">
                                    Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                    your
                                    bone density as well
                                </p>
                                <h2 className="text-lg pl-3 font-bold leading-9 text-black dark:text-white">
                                    Allyson Smith
                                </h2>
                                <span className="block pl-3 text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                    Chief Editor
                                </span>
                            </div>
                        </div>
                        <div className="relative mb-10 border-b-4 border-blue-500 ">
                            <div className="z-20 pt-8 pb-5 bg-lighter-gray shadow-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     className="absolute top-0 left-0 w-20 h-20 opacity-10" viewBox="0 0 16 16">
                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                                <div className="text-center">
                                    <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                                        <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4">
                                        </div>
                                        <img className="object-cover w-full h-full" src="https://i.postimg.cc/wj9DLCJj/yunming-wang-G9f4-Enb8-XVM-unsplash.jpg" alt=""/>
                                        <div
                                            className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4">
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4 px-3 text-base leading-7 text-dark-gray">
                                    Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                    your
                                    bone density as well

                                </p>

                                <h2 className="text-lg pl-3 font-bold leading-9 text-black dark:text-white">
                                    Allyson Smith
                                </h2>
                                <span className="block pl-3 text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                    Chief Editor
                                </span>
                            </div>
                        </div>
                        <div className="relative mb-10 border-b-4 border-blue-500 ">
                            <div className="z-20 pt-8 pb-5 bg-lighter-gray shadow-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     className="absolute top-0 left-0 w-20 h-20 opacity-10" viewBox="0 0 16 16">
                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
                                <div className="text-center">
                                    <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                                        <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4">
                                        </div>
                                        <img className="object-cover w-full h-full" src="https://i.postimg.cc/wj9DLCJj/yunming-wang-G9f4-Enb8-XVM-unsplash.jpg" alt=""/>
                                        <div
                                            className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4">
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4 px-3 text-base leading-7 text-dark-gray">
                                    Keep on jumping to get the most of the jump rope exercise. It will help you to increase
                                    your
                                    bone density as well
                                </p>
                                <h2 className="text-lg pl-3 font-bold leading-9 text-black dark:text-white">
                                    Allyson Smith
                                </h2>
                                <span className="block pl-3 text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                                    Chief Editor
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </>)
}
export  default OurStory