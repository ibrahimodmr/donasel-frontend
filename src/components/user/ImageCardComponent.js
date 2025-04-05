import React from "react";
import { Link } from "react-router-dom";

const ImageCardComponent = ( {image} ) => {
    const { furnitureId, name } = image;
    const encodedImage = encodeURIComponent(JSON.stringify({ furnitureId, name }));

    
    return (
        <div>
            <img src={image.path} alt={image.name} className="w-full p-3 my-3 h-3/4" />
            <Link to={`/urun/${encodedImage}`} className="m-2 text-lg font-semibold text-black hover:underline" > { image.name } </Link>
        </div>
    )
}

export default ImageCardComponent;