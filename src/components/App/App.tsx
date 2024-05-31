import { useEffect, useState } from 'react';
import { fetchGallery } from '../../data-api/gallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import './App.css';
import { Image } from './types';



export default function App(): JSX.Element {
  const [gallery, setGallery] = useState<Image[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>(""); 
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  
  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setGallery([]);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const openModal = (image: Image): void => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };
  

  useEffect(() => {
    if (query === "") {
      return;
    }
    
    async function getImages(query: string, page: number): Promise<void> {
    
    try {
      setError(false);
      setIsLoading(true);
      const data: Image[] = await fetchGallery(query, page);
      setGallery((prevGallery) => {
        return [...prevGallery, ...data];
      });

    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
    }
    
  getImages(query, page);
  }, [page, query]);
  
  const LoadMoreImg: boolean = gallery.length > 0 && !error && !isloading;

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


