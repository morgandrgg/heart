import '../../Styles/Gallery.scss'
import React, {useEffect, useState} from "react";
import Sponsorship1 from '../../assets/MainImages/1696322516004.jpg'
import Sponsorship2 from '../../assets/MainImages/1696322538612.jpg'
import Sponsorship3 from '../../assets/MainImages/1696322702174.jpg'
import Sponsorship4 from '../../assets/MainImages/1697107864832.jpg'
import Sponsorship5 from '../../assets/MainImages/1697108054172.jpg'

const SponsorshipGallery = () =>{
    const galleryData = [
        { image: Sponsorship1, thumbnail: Sponsorship1 },
        { image: Sponsorship2, thumbnail: Sponsorship2 },
        { image: Sponsorship3, thumbnail: Sponsorship3 },
        { image: Sponsorship4, thumbnail: Sponsorship4 },
        { image: Sponsorship5, thumbnail: Sponsorship5 },
        // Add more gallery items as needed
    ];


    const [selectedImageIndex, setSelectedImageIndex] = useState([3]);
    const handleThumbnailClick = (index) => {
        setSelectedImageIndex(index);
    };
    useEffect(() => {
        const selectors = document.querySelectorAll('.gallery__selector');
        const currentCount = document.querySelector('.current-count');

        selectors.forEach((selector, index) => {
            selector.addEventListener('change', () => {
                currentCount.innerText = index + 1;
                setSelectedImageIndex(index);
            });
        })
        // Set the first input as checked
        selectors[0].checked = true;
        currentCount.innerText = 1;
    }, []);


    return(
        <>

            <div>
                <section className="gallery -mt-24 md:-mt-20">
                    {galleryData.map((item, index) => (
                        <div className="gallery__item" key={index}>
                            <input
                                type="radio"
                                id={`img-${index + 1}`}
                                name="gallery"
                                className="gallery__selector z-10"
                                data-index={index + 1}
                            />
                            <img className="gallery__img" src={item.image} alt="" loading="lazy" />
                            <label htmlFor={`img-${index + 1}`} className="gallery__thumb w-fit mt-64 md:mt-20">
                                <img
                                    src={item.thumbnail}
                                    alt=""
                                    loading="lazy"
                                    className="h-20 md:h-24 w-32 md:w-24 overflow-x-scroll md:overflow-x-scroll object-cover"
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            </label>
                        </div>
                    ))}
                    <div className=" z-10 mt-32 md:-mt-20 ml-5 absolute bg-primary-color bg-opacity-40 text-neutral-black font-bold h-24 p-4">
                        <span className="current-count">{selectedImageIndex}</span>/
                        <span className="total-count">{galleryData.length}</span>
                        <span className="bg-transparent"><p>Sponsorship Programme</p></span>
                    </div>
                </section>
            </div>
        </>
    )
}
export default SponsorshipGallery