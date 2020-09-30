import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch-man']);

    return (
        <div id='main'>
            <div className='container'>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategories} />
                <hr />
                <ul>
                    {categories.map((category) => (
                        <GifGrid key={category} category={category} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GifExpertApp;
