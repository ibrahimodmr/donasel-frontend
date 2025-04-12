import React from "react";
import ImageCardComponent from "../../components/user/ImageCardComponent";
import { useState, useEffect } from "react";

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(
      typeof window !== "undefined" ? window.innerWidth < 768 : false
    );
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 768);
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isMobile;
  }

const Diningroom = () => {

    const [images, setImages] = useState([]);
    
    useEffect(() => {
        const fetchImagesFromPublicFolder = async () => {
          const folderPath = "/donasel_images/yemek/";
          const models = [
            "sirus"
          ];

          
          const imagesData = [];
      
          for (const model of models) {

            const filePath = `${folderPath}${model}/1.jpg`;
                imagesData.push({
                    path: filePath,
                    name: model.charAt(0).toUpperCase() + model.slice(1),
                    furnitureId: 1,
                });
          }

          setImages(imagesData);
        };
      
        fetchImagesFromPublicFolder();
      }, []);
      
      
    const isMobile = useIsMobile();
      
    return (
        <div className="flex-col my-4">
            <div className="flex px-10 py-10 my-4 text-white bg-black">
                <img src="/dinningroom.jpg" className="w-1/2 m-2"/>
                <div className="flex flex-col items-center justify-center w-1/2 m-2">
                    <h1 className="font-serif text-4xl font-bold">YEMEK ODALARI</h1>
                </div> 
            </div>
            <div className="flex items-center justify-center mt-20">
            {isMobile ? (
                    <div className="grid w-4/5 overflow-hidden ">
                    {images.map((image, index) => (
                            <ImageCardComponent key={index} image={image} />
                            ))}
                </div>
                ) : (
                    <div className="grid w-4/5 grid-cols-3 overflow-hidden ">
                    {images.map((image, index) => (
                            <ImageCardComponent key={index} image={image} />
                            ))}
                </div>
                )}
            </div>
        </div>
    )
}


export default Diningroom;