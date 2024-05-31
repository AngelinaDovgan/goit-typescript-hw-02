import css from './ImageCard.module.css';
import { GoCheck } from "react-icons/go";
import { MdOutlineDescription } from "react-icons/md";


interface ImageCardProps {
  image: {
    urls: {
      small: string;
    };
    alt_description: string;
    user?: {
      name: string;
    };
  };
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ onClick, image: { urls: { small }, alt_description, user } }) => {
    const handleClick = () => {
        onClick && onClick();
    }
    return (
        <>
            <img src={small} alt={alt_description} onClick={handleClick} className={css.img} />
            <div className={css.cont}>
            <p className={css.text}>  <GoCheck /> Username: {user?.name}</p>
            <p className={css.text}> <MdOutlineDescription /> Desription: {alt_description}</p>   
            </div>
            
        </>        
)
}

export default ImageCard;


// export default function ImageCard: React.FC<ImageCardProps>({ onClick, image: { urls: { small }, alt_description, user: {name} } }) {
//     const handleClick = () => {
//         onClick && onClick();
//     }
//     return (
//         <>
//             <img src={small} alt={alt_description} onClick={handleClick} className={css.img} />
//             <div className={css.cont}>
//             <p className={css.text}>  <GoCheck /> Username: {name}</p>
//             <p className={css.text}> <MdOutlineDescription /> Desription: {alt_description}</p>   
//             </div>
            
//         </>        
// )
// }