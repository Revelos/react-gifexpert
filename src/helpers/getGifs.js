export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=jPEzJcuV2UZCPYcPpjat9x0JHZ6yCSlO&q=${category}&limit=10`;
  //Fetch retorna una respuesta con cabeceras http 
  const resp = await fetch(url);
  //Al usar .json() resuelve esa respuesta y la convierte en una promesa que luego con desestructuracion de saca la data importante
  //console.log(resp.json());
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
