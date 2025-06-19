import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category, page = 0) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    setIsLoading(true);
    const newImages = await getGifs(category, page);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, [category, page]); // 🧠 se actualiza si cambia la categoría o la página

  return {
    images,
    isLoading,
  };
};
