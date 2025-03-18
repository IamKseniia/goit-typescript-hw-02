import './App.css';
import 'modern-normalize';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { fetchPhotos } from './services/photos-api.js';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import Loader from './components/Loader/Loader.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [targetImage, setTargetImage] = useState(null);

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

  const handleSetQuery = newQuery => {
    console.log(newQuery);
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
    setPerPage(12);
  };

  const openModal = imageUrl => {
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
