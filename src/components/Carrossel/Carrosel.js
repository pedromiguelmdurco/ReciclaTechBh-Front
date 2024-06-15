import { useState } from "react";
import img1 from "../../assets/Border-Collie-2-2392238780.jpg";
import img3 from "../../assets/images.jpeg";
import img2 from "../../assets/salsicha.jpg";


export default function Carrosel() {
  const images = [img1, img2, img3];
  const videos = ['H39dG1d4I8o', 'MezIF9iTowM', 'H39dG1d4I8o'];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex - 1 === 0) {
      setCurrentIndex(videos.length - 1);
    } else {
      setCurrentIndex((prevValue) => prevValue - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 === videos.length) {
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

      {/*
        src={videos[currentIndex]}
        className="w-72 h-72"
        alt="Imagem carrosel"*/}

      <iframe className="w-screen , h-55screen"
       src={`https://www.youtube.com/embed/${videos[currentIndex]}`}
       title="sou a ultima pessoa do planeta terra musica @pedromirfilho" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
    

    </div>
  );
}
