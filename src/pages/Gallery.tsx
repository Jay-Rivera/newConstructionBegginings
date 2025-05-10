import { useEffect, useState } from "react";

function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    const importImages = async () => {
      const imagesGlob = import.meta.glob(
        "../assets/images/*.{jpg,jpeg,png,gif}",
        {
          eager: true,
          as: "url",
        }
      );
      const imageUrls = Object.values(imagesGlob) as string[];
      setImages(imageUrls);
    };

    importImages();
  }, []);

  const openImage = (index: number) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const showPrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
    }
  };

  const showNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <div className="gallery__page">
      <h1>Here are some of our projects</h1>
      <div className="gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`image-${index}`}
            loading="lazy"
            onClick={() => openImage(index)}
            className="thumbnail"
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {currentIndex !== null && (
        <div className="lightbox">
          <div className="overlay" onClick={closeImage} />
          <div className="lightbox-content">
            <button className="arrow__btn" onClick={showPrev}>
              ←
            </button>
            <img src={images[currentIndex]} alt={`large-${currentIndex}`} />
            <button className="arrow__btn" onClick={showNext}>
              →
            </button>
            <button className="close" onClick={closeImage}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
