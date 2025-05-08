import { useEffect, useState } from "react";

function Gallery() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const importImages = async () => {
      // Dynamically import all image files in the folder
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

  return (
    <div className="gallery__page">
      <h1>Here are some of our projects</h1>
      <div className="gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`image-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
