export const getGifs = async (category, page = 0, limit = 10) => {
  const offset = page * limit;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=w5KS3jcxJDEnvvfdlHZPHnxxXTQgmhDU&q=${category}&limit=${limit}&offset=${offset}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  return data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_height_small.url,
  }));
};
