import React from "react";
import ImageCardComponent from "../../components/user/ImageCardComponent";
import { useState, useEffect } from "react";
import { fetchImagesByCategoryAndFavorities } from "../../utils/Api";
import EnumDB from "../../utils/EnumsDB";

const Bedroom = () => {

    const [images, setImages] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const imagesData = await fetchImagesByCategoryAndFavorities(EnumDB.YATAK_ODASI, true);
            setImages(imagesData);
        }
        fetchData();
    },[]);
 
    return (
        <div className="flex-col my-4">
            <div className="flex px-10 py-10 my-4 text-white bg-black">
                <img src="/bedroom_main.jpeg" className="w-1/2 m-2"/>
                <div className="flex flex-col items-center justify-center w-1/2 m-2">
                    <h1 className="font-serif text-4xl font-bold">YATAK ODALARI</h1>
                </div> 
            </div>
            <div className="flex items-center justify-center mt-20">
                <div className="grid w-4/5 grid-cols-3 overflow-hidden ">
                    {images.map((image, index) => (
                            <ImageCardComponent key={index} image={image} />
                            ))}
                </div>
            </div>
        </div>
    )
}


export default Bedroom;