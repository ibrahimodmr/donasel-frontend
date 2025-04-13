import React, { useEffect, useRef, useState } from "react";

const LazyVideo = ({ src }) => {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    // Parent container uses Tailwind for layout and spacing
    <div ref={videoRef} className="flex items-center justify-center w-full h-full m-auto">
      {shouldLoad && (
        <video
          // Use w-full, h-auto, and object-contain for responsive sizing
          className="object-contain w-auto h-full"
          autoPlay
          muted
          loop
          controls
        >
          <source src={src} type="video/mp4" />
          Tarayıcınız bu videoyu desteklemiyor.
        </video>
      )}
    </div>
  );
};

export default LazyVideo;
