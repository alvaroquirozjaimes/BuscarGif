import { useState } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const [page, setPage] = useState(0);
  const { images, isLoading } = useFetchGifs(category, page);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(Math.max(page - 1, 0));

  return (
    <>
      <h3>{category}</h3>

      {isLoading && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>

      <div className="pagination-buttons">
        <button onClick={prevPage} disabled={page === 0}>Anterior</button>
        <span>Página {page + 1}</span>
        <button onClick={nextPage}>Siguiente</button>
      </div>
    </>
  );
};
