import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import LazyVideo from "../../components/user/LazyVideo";

const images = [
  "/anasayfa_fuar.jpg",
  "/anasayfa_0.jpg",
  "/anasayfa_1.jpg",
  "/anasayfa_2.jpg",
  "/anasayfa_3.jpg",
  "/anasayfa_4.jpg",
];

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* HERO / SLIDER SECTION */}
      <div className="relative w-full h-[80vh] sm:h-screen overflow-hidden bg-black ">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="object-cover w-full transition-all duration-700 ease-in-out h-5/6"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-3xl font-bold text-center text-white sm:text-5xl drop-shadow-lg">
            52. MODEF Mobilya Fuarı'nda Sizlerleyiz 
            <br/>
            <br />
            15-19 NISAN 2025
            <br/>

            <br />
            DONASEL MOBİLYA
          </h1>
        </div>

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

      {/* PROMOTIONAL VIDEO SECTION */}
      <section className="flex flex-col items-center justify-center py-10 bg-transparent">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Tanıtım Videomuz</h1>
        
        <LazyVideo src="/tanitim.mp4" />
      </section>
      
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Ürün Videoları</h1>
      
      <section className="flex flex-col items-center justify-center py-10 bg-transparent h-[80vh]">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">AZRA Koltuk Takımı</h2>
        <LazyVideo src="/azra.mp4" />
      </section>
      
      <section className="flex flex-col items-center justify-center py-10 bg-transparent h-[80vh]">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">NISA Koltuk Takımı</h2>
        <LazyVideo src="/nisa.mp4" />
      </section>
      
      <section className="flex flex-col items-center justify-center py-10 bg-transparent h-[80vh]">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Yatak </h2>
        <LazyVideo src="/yatak.mp4" />
      </section>
    </>
  );
};

export default MainPage;
