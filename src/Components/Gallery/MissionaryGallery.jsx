import '../../Styles/Gallery.scss'
import React, {useEffect, useState} from "react";
import MissionaryGallery1 from '../../assets/MainImages/1697108190430.jpg'
import MissionaryGallery2 from '../../assets/MainImages/1697108181575.jpg'
import MissionaryGallery3 from '../../assets/MainImages/1697108167093.jpg'
import MissionaryGallery4 from '../../assets/MainImages/1697108149757.jpg'
import MissionaryGallery5 from '../../assets/MainImages/1697108137242.jpg'
import MissionaryGallery6 from '../../assets/MainImages/1697108125294.jpg'
import MissionaryGallery7 from '../../assets/MainImages/1697107900697.jpg'
import MissionaryGallery8 from "../../assets/MainImages/1697107880752.jpg"

const MissionaryGallery = () =>{
    const galleryData = [
        { image: MissionaryGallery1, thumbnail: MissionaryGallery1 },
        { image: MissionaryGallery2, thumbnail: MissionaryGallery2 },
        { image: MissionaryGallery3, thumbnail: MissionaryGallery3 },
        { image: MissionaryGallery4, thumbnail: MissionaryGallery4 },
        { image: MissionaryGallery5, thumbnail: MissionaryGallery5 },
        { image: MissionaryGallery6, thumbnail: MissionaryGallery6 },
        { image: MissionaryGallery7, thumbnail: MissionaryGallery7 },
        { image: MissionaryGallery8, thumbnail: MissionaryGallery8 },
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
                            <img className="gallery__img" src={item.image} alt="" loading="lazy"/>
                            <label htmlFor={`img-${index + 1}`} className="gallery__thumb w-fit mt-64 md:mt-20">
                                <img
                                    src={item.thumbnail}
                                    alt=""
                                    className="h-20 md:h-24 w-32 md:w-24 overflow-x-scroll md:overflow-x-scroll object-cover"
                                    onClick={() => handleThumbnailClick(index + 1)}
                                    loading="lazy"
                                />
                            </label>
                        </div>
                    ))}
                    <div className=" z-10 mt-32 md:-mt-20 ml-5 absolute bg-primary-color bg-opacity-40 text-neutral-black font-bold h-24 p-4">
                        <span className="current-count">{selectedImageIndex}</span>/
                        <span className="total-count">{galleryData.length}</span>
                        <span className="bg-transparent"><p>Missionary Programmes</p></span>
                    </div>
                </section>

            </div>
        </>
    )
}
export default MissionaryGallery