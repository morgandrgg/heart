import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import card1 from '../../assets/AppImages/carousel-1.jpg'
import card2 from '../../assets/AppImages/carousel-2.jpg'
import card3 from '../../assets/AppImages/carousel-3.jpg'
import '../../Styles/LandingCarousel.css'

const LandingCarousel = ()=>{
    return(
        <div className='carousel-container'>
            <Carousel className='' showArrows={true} infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true} transitionTime={1000} axis="horizontal" interval={3000}>
                <div>
                    <div className="carousel-item flex -z-10 -mt-6">
                        <div className=''>
                            <img src={card1} alt={card1} className="w-fit h-fit min-h-screen object-cover" />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="absolute left-10 text-white my-48 w-2/3 bg-transparent p-4 z-10">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-left">
                                Let us be kind for children
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-4 text-justify overflow-x-hidden">
                                Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                            </p>
                            <div className="carousel-btn flex md:flex-row flex-col gap-8 mt-8 ">
                                <button className='bg-blue-500 text-white px-6 py-2 rounded-full md:px-8 md:py-3 lg:px-10 lg:py-4'>
                                    Get Started
                                </button>
                                <button className='bg-blue-500 text-white px-6 py-2 rounded-full md:px-8 md:py-3 lg:px-10 lg:py-4'>
                                    <a href="" className="btn btn-custom btn-play text-left" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                        Watch Video
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="carousel-item flex -z-10 -mt-6">
                        <div className=''>
                            <img src={card2} alt={card2} className="w-fit h-fit min-h-screen object-cover" />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="absolute left-10 text-white my-48 w-2/3 bg-transparent p-4 z-10">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-left">
                                Let us be kind for children
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-4 text-justify overflow-x-hidden">
                                Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                            </p>
                            <div className="carousel-btn flex md:flex-row flex-col gap-8 mt-8 ">
                                <button className='bg-blue-500 text-white px-6 py-2 rounded-full md:px-8 md:py-3 lg:px-10 lg:py-4'>
                                    Get Started
                                </button>
                                <button className='bg-blue-500 text-white px-6 py-2 rounded-full md:px-8 md:py-3 lg:px-10 lg:py-4'>
                                    <a href="" className="btn btn-custom btn-play text-left" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                        Watch Video
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="carousel-item flex -z-10 -mt-6">
                        <div className=''>
                            <img src={card3} alt={card3} className="w-fit h-fit min-h-screen object-cover" />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="absolute left-10 text-white my-48 w-2/3 bg-transparent p-4 z-10">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-left">
                                Let us be kind for children
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-4 text-justify overflow-x-hidden">
                                Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                            </p>
                            <div className="carousel-btn flex md:flex-row flex-col gap-8 mt-8 ">
                                <button className='bg-pink-900 text-white px-6 py-2 rounded-full md:px-8 md:py-3 lg:px-10 lg:py-4'>
                                    Get Started
                                </button>
                                <button className='bg-yellow-100 hover:bg-pink-900 hover:text-white opacity-75 px-6 py-2 rounded-full md:px-8 md:py-3 lg:px-10 lg:py-4'>
                                    <a href="" className="btn btn-custom btn-play text-left" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                        Watch Video
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel>

        </div>
    )
}

export default LandingCarousel