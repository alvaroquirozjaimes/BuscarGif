import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

// Custom hook que se encarga de obtener los gifs de una categoría y página determinada
export const useFetchGifs = (category, page = 0) => {
  // Estado local para almacenar las imágenes obtenidas de la API
  const [images, setImages] = useState([]);

  // Estado para controlar si la petición está cargando
  const [isLoading, setIsLoading] = useState(true);

  // Función asincrónica que obtiene los gifs usando la función getGifs()
  const getImages = async () => {
    setIsLoading(true); // Marca como "cargando" mientras se obtienen los gifs
    const newImages = await getGifs(category, page); // Llama a la API con la categoría y página
    setImages(newImages); // Guarda los gifs en el estado
    setIsLoading(false);  // Finaliza el estado de carga
  };

  // useEffect se ejecuta cada vez que cambian la categoría o la página
  useEffect(() => {
    getImages();
  }, [category, page]);

  // Retorna los gifs y el estado de carga al componente que use este hook
  return {
    images,
    isLoading,
  };
};
