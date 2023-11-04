import story from '../assets/MainImages/1696322544316.jpg'
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
                <section className="container mx-auto py-0 px-8">
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl text-dark-gray text-center font-semibold mb-4">Our History</h2>
                            <p className="text-lg mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                commodo, quam non fringilla viverra, purus metus tincidunt nisi, ut
                                fermentum arcu velit id erat.
                                Sed non aliquam ipsum, nec volutpat leo. Proin ut velit non dolor
                                bibendum suscipit. In in leo et dui luctus euismod.
                            </p>
                            <p className="text-lg mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                commodo, quam non fringilla viverra, purus metus tincidunt nisi, ut
                                fermentum arcu velit id erat.
                                Sed non aliquam ipsum, nec volutpat leo. Proin ut velit non dolor
                                bibendum suscipit. In in leo et dui luctus euismod.
                            </p>
                            <p className="text-lg mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                commodo, quam non fringilla viverra, purus metus tincidunt nisi, ut
                                fermentum arcu velit id erat.
                                Sed non aliquam ipsum, nec volutpat leo. Proin ut velit non dolor
                                bibendum suscipit. In in leo et dui luctus euismod.
                            </p>
                            <p className="text-lg mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                commodo, quam non fringilla viverra, purus metus tincidunt nisi, ut
                                fermentum arcu velit id erat.
                                Sed non aliquam ipsum, nec volutpat leo. Proin ut velit non dolor
                                bibendum suscipit. In in leo et dui luctus euismod.
                            </p>
                            <p className="text-lg mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                commodo, quam non fringilla viverra, purus metus tincidunt nisi, ut
                                fermentum arcu velit id erat.
                                Sed non aliquam ipsum, nec volutpat leo. Proin ut velit non dolor
                                bibendum suscipit. In in leo et dui luctus euismod.
                            </p>
                            <p className="text-lg mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                commodo, quam non fringilla viverra, purus metus tincidunt nisi, ut
                                fermentum arcu velit id erat.
                                Sed non aliquam ipsum, nec volutpat leo. Proin ut velit non dolor
                                bibendum suscipit. In in leo et dui luctus euismod.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src={story} alt="Our Story" className="w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </section>
                <div className="bg-pure-white">
                    <div className="container mx-auto">
                            <section className="items-center py-2 font-poppins dark:bg-gray-800">
                                <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                                    <div className="max-w-xl mx-auto">
                                        <div className="text-center ">
                                            <div className="relative flex flex-col items-center">
                                                <h1 className="text-4xl font-bold text-neutral-black leading-tight">
                                                    Our Journey
                                                </h1>
                                                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                                                    <div className="flex-1 h-2 bg-blue-200">
                                                    </div>
                                                    <div className="flex-1 h-2 bg-blue-400">
                                                    </div>
                                                    <div className="flex-1 h-2 bg-blue-600">
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mb-16 text-base text-center text-gray-500">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni eius eaque?
                                                Pariatur
                                                numquam, odio quod nobis ipsum ex cupiditate?
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full mx-auto lg:max-w-3xl">
                                        <div className="relative flex justify-between">
                                            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                                                <div>
                                                    <div
                                                        className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                                                        <div className="w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400"></div>
                                                    </div>
                                                </div>
                                                <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
                                            </div>
                                            <div>
                                                <h2
                                                    className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100">
                                                    January 2002</h2>
                                                <div
                                                    className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                                                    <div className="relative z-20 p-6">
                                                        <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">Company Started</p>
                                                        <p className="text-gray-700 dark:text-gray-500">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus
                                                            reprehenderit.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex justify-between">
                                            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                                                <div>
                                                    <div
                                                        className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                                                        <div className="w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400"></div>
                                                    </div>
                                                </div>
                                                <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
                                            </div>
                                            <div>
                                                <h2
                                                    className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100">
                                                    February 2006</h2>
                                                <div
                                                    className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                                                    <div className="relative z-20 p-6">
                                                        <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">Website Launched</p>
                                                        <p className="text-gray-700 dark:text-gray-500">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus
                                                            reprehenderit.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex justify-between">
                                            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                                                <div>
                                                    <div
                                                        className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                                                        <div className="w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400"></div>
                                                    </div>
                                                </div>
                                                <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
                                            </div>
                                            <div>
                                                <h2
                                                    className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100">
                                                    March 2016</h2>
                                                <div
                                                    className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                                                    <div className="relative z-20 p-6">
                                                        <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400"> Made 100+ Themes</p>
                                                        <p className="text-gray-700 dark:text-gray-500">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus
                                                            reprehenderit.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex justify-between">
                                            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                                                <div>
                                                    <div
                                                        className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full dark:bg-gray-600">
                                                        <div className="w-4 h-4 bg-blue-600 rounded-full dark:bg-blue-400"></div>
                                                    </div>
                                                </div>
                                                <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
                                            </div>
                                            <div>
                                                <h2
                                                    className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100">
                                                    April 2021</h2>
                                                <div
                                                    className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                                                    <div className="relative z-20 p-6">
                                                        <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                                                            Launch Project
                                                        </p>
                                                        <p className="text-gray-700 dark:text-gray-500">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus
                                                            reprehenderit.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        {/*</div>*/}
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10" viewBox="0 0 16 16">
                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10" viewBox="0 0 16 16">
                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10" viewBox="0 0 16 16">
                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                </svg>
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