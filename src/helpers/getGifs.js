export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=a33kTHDC3GddO5cD65gwNMWX0NGyGxvI`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.images?.downsized_medium.url,
    }));

    return gifs;
};
