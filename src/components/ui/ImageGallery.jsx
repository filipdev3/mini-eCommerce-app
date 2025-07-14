import { useState } from "react";
import '../../styles/image-gallery.css';

export default function ImageGallery({ product }){

    // state variable for current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // array of images 
    const imgArr = product.images;

    // function to list to the right
    const rightMove = () => {
        setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1 < imgArr.length ? prevCurrentIndex + 1 : prevCurrentIndex)
    }

    // function to list to the lefs
    const leftMove = () => {
        setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1 >= 0 ? prevCurrentIndex - 1 : prevCurrentIndex)
    }

    return (

        
            <div className="image-gallery">
                <img className="img-gal" src={`${import.meta.env.BASE_URL}${imgArr[currentIndex]}`} alt={`${product.name}-${product.id}` } />
                <button className="left-btn" onClick={leftMove}>
                    <img src={`${import.meta.env.BASE_URL}/back.png`} alt="nex-btn" />
                </button>
                <button className="right-btn" onClick={rightMove}>
                    <img src={`${import.meta.env.BASE_URL}/next.png`} alt="back-btn" />
                </button>
            </div>
        

    )
}
//`${import.meta.env.BASE_URL}${product.images[0]}`