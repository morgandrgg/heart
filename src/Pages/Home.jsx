import React, {useEffect, useState} from "react";
import LandingCarousel from "../Components/LandingCarousel/LandingCarousel";
import DonationForm from "../Components/DonationForm/DonationForm.jsx";
import '../Styles/Home.css'
import {Link} from "react-router-dom";

const Home = ()=>{
    const [count, setCount] = useState(0);

    // Simulate counting up to your impact
    useEffect(() => {
        const interval = setInterval(() => {
            if (count < 1000) {
                setCount(count + 100);
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [count]);
    const [counter, setCounter] = useState(0);

    // Simulate counting up to your impact
    useEffect(() => {
        const interval = setInterval(() => {
            if (counter < 1500) {
                setCounter(counter + 50);
            } else {
                clearInterval(interval);
            }
        }, 150);
        return () => clearInterval(interval);
    }, [counter]);
    return(
        <section>

            <LandingCarousel/>
            <div className='Home-module'></div>
            <div className='flex md:flex-row flex-col bg-gradient-to-br from-dark-slate to-lighter-gray'>
                <div className="container mx-auto text-light-gray p-8 md:p-16 text-center">
                    <div className="bg-lighter-blue  rounded-lg shadow-lg p-8 md:p-12">
                        <h2 className="text-2xl text-neutral-black md:text-3xl font-semibold mb-4">
                            Our Mission
                        </h2>
                        <p className="text-pure-white text-lg md:text-xl mb-6">
                            Heart Of Generation is a community-based organization that provides food, training, and scholarships to those in need. We operate various ministries to support individuals living in desperate poverty in the slums of Nairobi, Kenya.
                        </p>
                        <p className="text-pure-white text-lg md:text-xl mb-6 text-center">
                            We invite your church or organization to partner with us to bring food to the hungry through our programs, or you can join our team in Kenya to make a difference.
                        </p>
                            <Link to='/aboutus' >
                                <button className="bg-pure-white hover:bg-lighter-gray hover:text-dark-blue text-light-blue px-6 py-2 rounded-full font-semibold text-lg">Read More</button>
                            </Link>
                    </div>
                </div>
                <div className="container mx-auto bg-lighter-blue py-8 text-center">
                    <div className="bg-light-blue  rounded-lg shadow-lg p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                            Our Priorities
                        </h2>
                        <p className="text-lg md:text-xl text-dark-gray mb-6">
                            "Fleshing Out" the Passion of Christ for a Lost and Dying World
                        </p>
                        <p className="text-lg md:text-xl text-dark-gray mb-6">
                            Our priority is to invest our greatest resources and energies in those whom the world might consider to be the least. We recognize that when we reach out to the least, we do it for Jesus.
                        </p>
                        <p className="text-lg md:text-xl">
                            "I tell you the truth, whatever you did for one of the least of these brothers and sisters of mine, you did for me..." – Jesus <br/> <br/> <b>(Matthew 25:40)</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto text-dark-gray p-8 md:p-16 text-center">
                    <div className="bg-lighter-blue rounded-lg shadow-lg p-8 md:p-12">
                        <h2 className="text-2xl text-dark-gray md:text-3xl font-semibold mb-4">
                            Join the Team
                        </h2>
                        <p className="text-pure-white text-lg md:text-xl mb-6">
                            We have various opportunities to get involved, including full-time partnerships, short-term projects, and online giving options such as sponsoring a child, supporting a missionary, disaster relief, and food programs.
                        </p>
                        <p className="text-pure-white text-lg md:text-xl mb-6">
                            We have various opportunities to get involved, including full-time partnerships, short-term projects, and online giving options such as sponsoring a child.
                        </p>
                        <Link to='/fullpartnership' >
                            <button className="bg-pure-white hover:bg-lighter-gray hover:text-dark-blue text-light-blue px-6 py-2 rounded-full font-semibold text-lg">Join Us</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=' pb-4'>
                <div className="z-30 relative flex items-center justify-center w-full h-full overflow-auto">
                    <div className="p-4 rounded-lg">
                        <h1 className='text-4xl text-center font-extrabold font-sans text-primary-color text-opacity-80 mt-8 mb-3'>Our Impact</h1>
                    </div>
                </div>
                <div className='flex md:flex-row flex-wrap justify-center mb-12 gap-8 mx-5'>
                    <div className="p-6 w-72 bg-dark-slate rounded-lg shadow">
                        <h1 className="text-2xl font-extrabold text-dark-gray">Child Sponsorship</h1>
                        <div className="text-4xl font-bold text-medium-blue mt-4">{counter}+</div>
                        <p className="text-sm text-light-gray mt-2">Children Impacted</p>
                    </div>
                    <div className="p-6 w-72 bg-dark-slate rounded-lg shadow">
                        <h1 className="text-2xl font-extrabold text-dark-gray">Food Programmes</h1>
                        <div className="text-4xl font-bold text-medium-blue mt-4">{count}+</div>
                        <p className="text-sm text-light-gray mt-2">Families Impacted</p>
                    </div>
                    <div className="p-6 w-72 bg-dark-slate rounded-lg shadow">
                        <h1 className="text-2xl font-extrabold text-dark-gray">Church Missionaries</h1>
                        <div className="text-4xl font-bold text-medium-blue mt-4">{counter}+</div>
                        <p className="text-sm text-light-gray mt-2">Believers Impacted</p>
                    </div>
                    <div className="p-6 w-72 bg-dark-slate rounded-lg shadow">
                        <h1 className="text-2xl font-extrabold text-dark-gray">Training Programmes</h1>
                        <div className="text-4xl font-bold text-medium-blue mt-4">{counter}+</div>
                        <p className="text-sm text-light-gray mt-2">Youths Impacted</p>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-br from-dark-slate to-lighter-gray'>
                <div className="flex md:flex-row flex-wrap justify-center mx-5">
                    <div className='w-screen -mt-14'>
                        <DonationForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home