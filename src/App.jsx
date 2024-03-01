import './App.css';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchPictures } from './pictures-api';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [total_pages, setTotalPages] = useState(0);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchPictures(query, page);

        setTotalPages(data.total_pages);

        setShowBtn(total_pages && total_pages === page);

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
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {pictures.length > 0 && <ImageGallery items={pictures} />}
      {loading && <Loader />}
      {pictures.length > 0 && !loading && !showBtn && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
}
