import css from './LoadMoreBtn.module.css'

interface LoadMoreBtnProps {
    onClick: () => void;
}

const  LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
    return (
    <button onClick={onClick} type="button" className={css.btn}>Load more images</button>
    )
}
export default LoadMoreBtn;





// export default function LoadMoreBtn({ onClick }) {
//     return (
//     <button onClick={onClick} type="button" className={css.btn}>Load more images</button>
//     )
// }