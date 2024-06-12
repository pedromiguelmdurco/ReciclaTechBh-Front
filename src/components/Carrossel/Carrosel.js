import { useState } from "react";
import img1 from "../../assets/Border-Collie-2-2392238780.jpg";
import img3 from "../../assets/images.jpeg";
import img2 from "../../assets/salsicha.jpg";

export default function Carrosel() {
  const images = [img1, img2, img3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex - 1 === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prevValue) => prevValue - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 === images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevValue) => prevValue + 1);
    }
  };

  return (
    <div className="relative w-fit">
      <button
        type="button"
        onClick={() => handlePrevious()}
        className="absolute top-1/2 left-2 text-white text-xl px-3 py-2 bg-[#5c832f] rounded-full"
      >
        <div>{"<"}</div>
      </button>

      <button
        type="button"
        onClick={() => handleNext()}
        className="absolute top-1/2 right-2 text-white text-xl px-3 py-2 bg-[#5c832f] rounded-full"
      >
        <div>{">"}</div>
      </button>

      <img
        src={images[currentIndex]}
        className="w-72 h-72"
        alt="Imagem carrosel"
      />
    </div>
  );
}
