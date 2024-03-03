import './App.css';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchPictures } from './pictures-api';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchPictures(query, page);

        setShowBtn(data.total_pages > page);

        setPictures(prevPictures => {
          return [...prevPictures, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [page, query]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setPictures([]);
  };

  const handleLoadMore = () => {
    // setPage(page+1);
    setPage(prevPage => prevPage + 1);
  };

  // Modal

  const handleOpenModal = modalObj => {
    setModalContent(modalObj);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {pictures.length > 0 && <ImageGallery items={pictures} onClickCard={handleOpenModal} />}
      {loading && <Loader />}
      {pictures.length > 0 && !loading && showBtn && <LoadMoreBtn onClick={handleLoadMore} />}

      <ImageModal content={modalContent} isOpen={modal} onModalClose={handleCloseModal} />
    </>
  );
}
