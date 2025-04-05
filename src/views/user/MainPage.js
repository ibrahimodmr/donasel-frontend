// import React, { useState } from "react";

// const images = [
//   "/img1.jpeg",
//   "/img2.jpeg",
//   "/img4.jpeg"
// ];

// const MainPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
  
//       <div className="relative w-full h-screen overflow-hidden border border-gray-300">
//         <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full"/>
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-r top-1/2"
//         >
//           &lt;
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute right-0 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-l top-1/2"
//         >
//           &gt;
//         </button>
//       </div>
//   );
// };

// export default MainPage;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const images = [
  "/img1.jpeg",
  "/img2.jpeg",
  "/img4.jpeg"
];

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-[80vh] sm:h-screen overflow-hidden bg-black">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="object-cover w-full h-full transition-all duration-700 ease-in-out"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1 className="text-3xl font-bold text-center text-white sm:text-5xl drop-shadow-lg">
          Hoş Geldiniz<br />Modern Mobilya Dünyasına
        </h1>
      </div>

      {/* Oklar */}
      <button
        onClick={handlePrev}
        className="absolute p-4 text-white transition-all duration-300 scale-100 -translate-y-1/2 rounded-full shadow-lg left-6 top-1/2 hover:text-black bg-white/20 hover:bg-white/80 backdrop-blur-md hover:scale-110"
        aria-label="Previous Slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      </button>

      <button
        onClick={handleNext}
        className="absolute p-4 text-white transition-all duration-300 scale-100 -translate-y-1/2 rounded-full shadow-lg right-6 top-1/2 hover:text-black bg-white/20 hover:bg-white/80 backdrop-blur-md hover:scale-110"
        aria-label="Next Slide"
      >
        <FontAwesomeIcon icon={faChevronRight} size="lg" />
      </button>

      {/* Dots */}
      <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
