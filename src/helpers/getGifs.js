// Función asíncrona que obtiene gifs desde la API de Giphy
export const getGifs = async (category, page = 0, limit = 10) => {
  // Calcula el offset con base en la página actual y la cantidad de gifs por página
  const offset = page * limit;

  // URL de la API de Giphy con los parámetros de búsqueda, paginación y tu API Key
  const url = `https://api.giphy.com/v1/gifs/search?api_key=w5KS3jcxJDEnvvfdlHZPHnxxXTQgmhDU&q=${encodeURIComponent(category)}&limit=${limit}&offset=${offset}`;

  // Realiza la petición HTTP
  const resp = await fetch(url);

  // Extrae la propiedad 'data' del JSON de respuesta
  const { data } = await resp.json();

  // Transforma los datos recibidos en un nuevo arreglo con solo la información necesaria
  return data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_height_small.url, // Usamos una versión liviana del gif para mejorar rendimiento
  }));
};
