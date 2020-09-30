import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category);
    // }, [category]);

    // const getGifs = async (category) => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=a33kTHDC3GddO5cD65gwNMWX0NGyGxvI`;

    //     const response = await fetch(url);
    //     const { data } = await response.json();

    //     const gifs = data.map((item) => ({
    //         id: item.id,
    //         title: item.title,
    //         image: item.images?.downsized_medium.url,
    //     }));

    //     setImages(gifs);
    // };

    // useEffect(() => {
    //     getGifs(category).then(setImages);
    // }, [category]);

    const { data: images, loading } = useFetchGifs(category);

    return (
        <div className='animate__animated animate__fadeIn'>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className='grid-gifs'>
                {images.map((item) => (
                    <GifGridItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default GifGrid;
