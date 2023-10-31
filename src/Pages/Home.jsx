import '../Styles/Home.css'
import LandingCarousel from "../Components/LandingCarousel/LandingCarousel.jsx";
const Home = ()=>{
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
            <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
                <div>
                    <h1 className='text-xl text-center font-extrabold'>Our Impact</h1>

                </div>
            </div>
            <div className="h-screen flex justify-center items-center">
                <div className="relative">
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-center border border-black rounded-full h-36 w-36">
          <span className="inline-block transform rotate-45">
            Heart of Generation
          </span>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white">
                            {/*<img src="/logo.png" alt="Logo" className="w-12 h-12 m-2" />*/}
                        </div>
                    </h1>
                </div>
            </div>
        </section>
    )
}
export default Home