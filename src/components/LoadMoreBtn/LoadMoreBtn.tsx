import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({ onClick }) {
    return (
    <button onClick={onClick} type="button" className={css.btn}>Load more images</button>
    )
}