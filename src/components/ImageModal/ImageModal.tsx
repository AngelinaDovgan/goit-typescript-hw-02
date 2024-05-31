import ReactModal from "react-modal";
import css from './ImageModal.module.css'
ReactModal.setAppElement('#root');

export default function ImageModal({isOpen, onRequestClose, image: {urls: {regular}, alt_description}}) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel='Modal Window'
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            className={css.content}
            imgClassName={css.img}
            overlayClassName={css.overlay}
        >
            <img src={regular} alt={alt_description} />
            </ReactModal>
    )
}