import './App.css';
import 'modern-normalize';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { fetchPhotos } from './services/photos-api';
import SearchBar from './components/SearchBar/SearchBar';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { AppState } from './services/types';

const App: React.FC = () => {
  const [photos, setPhotos] = useState<AppState['photos']>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(12);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [targetImage, setTargetImage] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await fetchPhotos(query, page, perPage);
        const results = response.data.results;

        if (Array.isArray(results)) {
          setPhotos(prev => [...prev, ...results]);
        } else {
          throw new Error('Unexpected data structure');
        }
      } catch {
        toast.error('Server is dead!');
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page, perPage]);

  const handleSetQuery = (newQuery: string) => {
    console.log(newQuery);
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
    setPerPage(12);
  };

  const openModal = (imageUrl: string) => {
    setTargetImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setTargetImage(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar handleSetQuery={handleSetQuery} />
      {photos.length > 0 && (
        <ImageGallery photos={photos} openModal={openModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos.length > 0 && <LoadMoreBtn setPage={setPage} />}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={targetImage}
      />
    </>
  );
};

export default App;
