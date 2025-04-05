import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImagesByFurnitureId } from '../../utils/Api';

const ImageGalleryComponent = () => {
    const { encodedImage } = useParams();
    const { name, furnitureId } = JSON.parse(decodeURIComponent(encodedImage));
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
            const imagesData = await fetchImagesByFurnitureId(furnitureId);
            setImages(imagesData);
        }
        fetchData();
    }, [furnitureId]);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    if (!images.length) {
        return (
            <p>Fotoğraflar yükleniyor...</p>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center h-4/5">
            <h1 className="my-4 text-2xl font-extrabold"> {name} YATAK ODASI </h1>
            <div className="relative w-4/5 p-4" style={{ height: '60vh' }}>
                <img 
                    src={images[currentIndex].path} 
                    alt={images[currentIndex].name} 
                    className="absolute inset-0 object-cover w-full h-full"
                />
            </div>
            <div className="flex mt-4 space-x-4">
                <button onClick={prevImage} className="p-2 text-white bg-black rounded-lg">
                    &lt;
                </button>
                <button onClick={nextImage} className="p-2 text-white bg-black rounded-lg">
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default ImageGalleryComponent;
