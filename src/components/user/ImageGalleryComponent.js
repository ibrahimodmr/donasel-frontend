import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


const ImageGalleryComponent = () => {
  const { encodedImage } = useParams();
  
  // Safely decode and parse the param
  let path = "";
  let name = "";
  let furnitureId = 0;

  try {
    const decodedStr = decodeURIComponent(encodedImage); 
    const parsed = JSON.parse(decodedStr);

    path = parsed.path || "";
    name = parsed.name || "";
    furnitureId = parsed.furnitureId || 0;
  } catch (error) {
    console.error("Failed to decode/parse encodedImage:", error);
  }

  if (path && path.endsWith("1.jpg")) {
    path = path.slice(0, -5);
  }
  
  if (path && !path.endsWith("/")) {
    path += "/";
  }
  

  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImagesFromPublicFolder = async () => {
      const folderPath = path; // e.g. "/donasel_images/yatak/ipek/"
      const imagesData = [];

    for (let i = 1; i <= 20; i++) {
        const filePath = `${folderPath}${i}.jpg`;
        try {
          const response = await fetch(filePath); // GET instead of HEAD
          console.log("Response for:", filePath, "=> status:", response.status);
      
          if (response.ok) {
            // Optionally check if it’s actually an image
            const contentType = response.headers.get("Content-Type");
            if (contentType && contentType.startsWith("image/")) {
              imagesData.push({ path: filePath, name: `${name} ${i}` });
            } else {
              console.warn(`Not an image: ${filePath}`);
              break;
            }
          } else {
            // 404 or some other error
            break;
          }
        } catch (error) {
          console.error("Fetch error:", filePath, error);
          break;
        }
      }
      

      setImages(imagesData);
    };

    // Only call fetch if we have a valid path
    if (path) {
      fetchImagesFromPublicFolder();
    }
  }, [path, name]);

  // Navigation
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!images.length) {
    return <p>Fotoğraflar yükleniyor...</p>;
  }

return (
    <div className="flex flex-col items-center justify-center h-3/5">
    <h1 className="my-4 text-4xl font-extrabold">{name}</h1>

    {/* Container that defines a consistent display size */}
    <div className="relative w-4/5 h-[500px] bg-white flex items-center justify-center">
      <img
        src={images[currentIndex].path}
        alt={images[currentIndex].name}
        className="object-contain max-w-full max-h-full border-2 rounded-sm shadow-lg border-black/50"
      />
        <div className="absolute z-10 flex items-center justify-center w-full gap-3 -translate-x-1/2 bg-transparent bottom-4 left-1/2">
            {images.map((_, i) => (
                <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-5 h-5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === i ? "bg-black/75" : "bg-black/40"
                }`}
                />
            ))}
        </div>
    </div>
  
      <div className="flex mt-4 space-x-4">
      <button
        onClick={prevImage}
        className="px-5 py-3 text-xl font-bold text-white transition-colors duration-200 ease-in-out bg-black rounded-full shadow-md hover:bg-slate-600 active:bg-slate-800"
        >
        {/* &lt;
         */}
         <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
        </button>

        <button
        onClick={nextImage}
        className="px-5 py-3 text-xl font-bold text-white transition-colors duration-200 ease-in-out bg-black rounded-full shadow-md hover:bg-slate-600 active:bg-slate-800"
        >
        {/* &gt; */}
        <FontAwesomeIcon icon={faChevronRight} size="2xl" />
        </button>

      </div>
    </div>
  );
  
};

export default ImageGalleryComponent;
