import { useEffect, useState } from 'react';
import { fetchGallery } from '../../data-api/gallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import './App.css';



export default function App() {
  const [gallery, setGallery] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(""); 
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setGallery([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };
  

  useEffect(() => {
    if (query === "") {
      return;
    }
    
    async function getImages() {
    
    try {
      setError(false);
      setIsLoading(true);
      const data = await fetchGallery(query, page);
      setGallery((prevGallery) => {
        return [...prevGallery, ...data];
      });

    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
    }
    
  getImages();
  }, [page, query]);
  
  const LoadMoreImg = gallery.length > 0 && !error && !isloading;

  return (
<div>
      <SearchBar onSearch={handleSearch} />
      {isloading && <Loader />}
      {error && <ErrorMessage />}
      {gallery.length > 0 && <ImageGallery images={gallery} openModal={openModal} />}
      {selectedImage && <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} image={selectedImage} />}
      {LoadMoreImg && <LoadMoreBtn onClick={handleLoadMore} />}
</div>  
  )
}


