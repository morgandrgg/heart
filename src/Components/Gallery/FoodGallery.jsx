import '../../Styles/Gallery.scss';
import React, {useEffect, useState} from 'react';
import foodProgramme1 from '../../assets/MainImages/1696322441843.jpg';
import foodProgramme2 from '../../assets/MainImages/1696322564317.jpg';
import foodProgramme3 from '../../assets/MainImages/1696322570463.jpg';
import foodProgramme4 from '../../assets/MainImages/1697107965284.jpg';
import foodProgramme5 from '../../assets/MainImages/1697107971004.jpg';
import foodProgramme6 from '../../assets/MainImages/1697107979386.jpg';
import foodProgramme7 from '../../assets/MainImages/1697107990420.jpg';
import foodProgramme8 from '../../assets/MainImages/1697108082037.jpg';

const Gallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const galleryData = [
        { image: foodProgramme1, thumbnail: foodProgramme1 },
        { image: foodProgramme2, thumbnail: foodProgramme2 },
        { image: foodProgramme3, thumbnail: foodProgramme3 },
        { image: foodProgramme4, thumbnail: foodProgramme4 },
        { image: foodProgramme5, thumbnail: foodProgramme5 },
        { image: foodProgramme6, thumbnail: foodProgramme6 },
        { image: foodProgramme7, thumbnail: foodProgramme7 },
        { image: foodProgramme8, thumbnail: foodProgramme8 },
        // Add more gallery items as needed
    ];

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
        });

        // Set the first input as checked
        selectors[0].checked = true;
        currentCount.innerText = 1;
    }, []);

    return (
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
                                    alt="" loading="lazy"
                                    className="h-20 md:h-24 w-32 md:w-24 overflow-x-scroll md:overflow-x-scroll object-cover"
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            </label>
                        </div>
                    ))}
                    <div className=" z-10 mt-32 md:-mt-20 ml-5 absolute bg-primary-color bg-opacity-40 text-neutral-black font-bold h-24 p-4">
                        <span className="current-count">{selectedImageIndex + 1}</span>/
                        <span className="total-count">{galleryData.length}</span>
                        <span className="bg-transparent"><p>Food Programmes</p></span>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Gallery;
