import  React, {useEffect, useState} from "react";
import LandingCarousel from "../Components/LandingCarousel/LandingCarousel";
import DonationForm from "../Components/DonationForm/DonationForm.jsx";
import Donate from '../assets/MainImages/1697107971004.jpg'
import '../Styles/Home.css'
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
            <div className='flex md:flex-row flex-col bg-gradient-to-r from-rose-100 to-teal-100'>
                <div className="container mx-auto text-gray-700 p-8 md:p-16 text-center">
                    <div className="bg-yellow-500  rounded-lg shadow-lg p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Our Mission
                        </h2>
                        <p className="text-white text-lg md:text-xl mb-6">
                            Heart Of Generation is a community-based organization that provides food, training, and scholarships to those in need. We operate various ministries to support individuals living in desperate poverty in the slums of Nairobi, Kenya.
                        </p>
                        <p className="text-white text-lg md:text-xl mb-6 text-center">
                            We invite your church or organization to partner with us to bring food to the hungry through our programs, or you can join our team in Kenya to make a difference.
                        </p>
                        <button className="bg-pink-900 hover:bg-pink-950  text-white px-6 py-2 rounded-full font-semibold text-lg">
                            Learn more
                        </button>
                    </div>
                </div>
                <div className="container mx-auto bg-yellow-500 py-8 text-center">
                    <div className="bg-yellow-500  rounded-lg shadow-lg p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                            Our Priorities
                        </h2>
                        <p className="text-lg md:text-xl text-gray-900 mb-6">
                            "Fleshing Out" the Passion of Christ for a Lost and Dying World
                        </p>
                        <p className="text-lg md:text-xl text-gray-900 mb-6">
                            Our priority is to invest our greatest resources and energies in those whom the world might consider to be the least. We recognize that when we reach out to the least, we do it for Jesus.
                        </p>
                        <p className="text-lg md:text-xl">
                            "I tell you the truth, whatever you did for one of the least of these brothers and sisters of mine, you did for me..." – Jesus (Matthew 25:40)
                        </p>
                    </div>
                </div>
                <div className="container mx-auto text-gray-700 p-8 md:p-16 text-center">
                    <div className="bg-yellow-500 rounded-lg shadow-lg p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Join the Team
                        </h2>
                        <p className="text-white text-lg md:text-xl mb-6">
                            We have various opportunities to get involved, including full-time partnerships, short-term projects, and online giving options such as sponsoring a child, supporting a missionary, disaster relief, and food programs.
                        </p>
                        <p className="text-white text-lg md:text-xl mb-6">
                            We have various opportunities to get involved, including full-time partnerships, short-term projects, and online giving options such as sponsoring a child.
                        </p>
                        <button className="bg-pink-900 hover:bg-pink-950 text-white px-6 py-2 rounded-full font-semibold text-lg">
                            Join Us
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="z-30 relative flex items-center justify-center w-full h-full overflow-auto">
                    <div className="p-4 bg-white rounded-lg">
                        <h1 className='text-4xl text-center font-extrabold text-indigo-600 mt-8 mb-3'>Our Impact</h1>
                    </div>
                </div>
                <div className='flex md:flex-row flex-wrap justify-center  gap-8 mx-5'>
                    <div className="p-6 w-72 bg-amber-200 rounded-lg shadow-2xl">
                        <h1 className="text-2xl font-extrabold text-indigo-600">Child Sponsorship</h1>
                        <div className="text-4xl font-bold text-gray-800 mt-4">{counter}+</div>
                        <p className="text-sm text-gray-600 mt-2">Children Impacted</p>
                    </div>
                    <div className="p-6 w-72 bg-amber-200 rounded-lg shadow-2xl">
                        <h1 className="text-2xl font-extrabold text-indigo-600">Child Sponsorship</h1>
                        <div className="text-4xl font-bold text-gray-800 mt-4">{count}+</div>
                        <p className="text-sm text-gray-600 mt-2">Children Impacted</p>
                    </div>
                    <div className="p-6 w-72 bg-amber-200 rounded-lg shadow-2xl">
                        <h1 className="text-2xl font-extrabold text-indigo-600">Child Sponsorship</h1>
                        <div className="text-4xl font-bold text-gray-800 mt-4">{counter}+</div>
                        <p className="text-sm text-gray-600 mt-2">Children Impacted</p>
                    </div>
                    <div className="p-6 w-72 bg-amber-200 rounded-lg shadow-2xl">
                        <h1 className="text-2xl font-extrabold text-indigo-600">Child Sponsorship</h1>
                        <div className="text-4xl font-bold text-gray-800 mt-4">{count}+</div>
                        <p className="text-sm text-gray-600 mt-2">Children Impacted</p>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-rose-100 to-teal-100 mt-3 mb-3 pb-8'>
                <div className="z-30 relative flex items-center justify-center w-full h-full overflow-auto">
                    <div className="p-4  rounded-lg">
                        <h1 className='text-4xl text-center font-extrabold text-indigo-600 mt-8 mb-3'>Make a Donation</h1>
                    </div>
                </div>
                <div className="flex md:flex-row flex-wrap justify-center mx-5 bg-amber-50 shadow-2xl rounded-b-lg">
                    <div className='w-96'>
                        <DonationForm/>
                    </div>
                    <div className='align-middle'>
                        <img src={Donate} alt={Donate} className='h-96 object-cover my-32'/>
                        <div className="image-overlay"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home