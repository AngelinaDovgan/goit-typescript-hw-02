import ImageCard from "../ImageCard/ImageCard"
import { nanoid } from "nanoid"
import css from './ImageGallery.module.css'
import { Image as GalleryImg} from "../App/types"

interface ImageGalleryProps {
    images: GalleryImg[];
    openModal: (image: GalleryImg) => void;

}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
    const handleImgClick = (image: GalleryImg) => {
        openModal(image);
    }
    return (
        <ul className={css.gallery}>
            {images.map((image) => (
                <li key={nanoid()} onClick={() => handleImgClick(image)} className={css.imgitem}>
                    <ImageCard image={image} onClick={() => handleImgClick(image)} />
</li> ))}
</ul>
)};

export default ImageGallery;






// export default function ImageGallery({ images, openModal }) {
//     const handleImgClick = (image) => {
//         openModal(image);
//     }
//     return (
//         <ul className={css.gallery}>
//             {images.map((image) => (
//                 <li key={nanoid()} onClick={() => handleImgClick(image)} className={css.imgitem}>
//                     <ImageCard image={image} />
// </li>
            
//             ))}
// </ul>
//     )
// };
   