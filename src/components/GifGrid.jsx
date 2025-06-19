import { useState } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// Componente que muestra los gifs según una categoría y permite paginación
export const GifGrid = ({ category }) => {
  // Estado local para controlar la página actual
  const [page, setPage] = useState(0);

  // Hook personalizado que obtiene los gifs desde la API
  const { images, isLoading } = useFetchGifs(category, page);

  // Función para ir a la siguiente página
  const nextPage = () => setPage(page + 1);

  // Función para ir a la página anterior, sin permitir ir más abajo de 0
  const prevPage = () => setPage(Math.max(page - 1, 0));

  return (
    <>
      {/* Título con el nombre de la categoría actual */}
      <h3>{category}</h3>

      {/* Mostrar animación de carga si se está esperando respuesta */}
      {isLoading && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}

      {/* Contenedor de las tarjetas con los gifs */}
      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))
        }
      </div>

      {/* Controles de paginación */}
      <div className="pagination-buttons">
        <button 
          onClick={prevPage} 
          disabled={page === 0}
        >
          Anterior
        </button>

        <span>Página {page + 1}</span>

        <button onClick={nextPage}>
          Siguiente
        </button>
      </div>
    </>
  );
};
