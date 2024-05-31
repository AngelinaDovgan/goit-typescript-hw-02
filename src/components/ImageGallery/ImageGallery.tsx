import ImageCard from "../ImageCard/ImageCard"
import { nanoid } from "nanoid"
import css from './ImageGallery.module.css'

export default function ImageGallery({ images, openModal }) {
    const handleImgClick = (image) => {
        openModal(image);
    }
    return (
        <ul className={css.gallery}>
            {images.map((image) => (
                <li key={nanoid()} onClick={() => handleImgClick(image)} className={css.imgitem}>
                    <ImageCard image={image} />
</li>
            
            ))}
</ul>
    )
};
   