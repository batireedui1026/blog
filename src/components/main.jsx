import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Carousel from "./carousel";

const Main = () => {
 

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1598981457915-aea220950616?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="">
      <div id="mainImage" className="relative">
        <Carousel slides={slides} currentIndex={currentIndex} />
        <div className="flex gap-3 justify-end pt-2 pr-3">
          <FaChevronLeft onClick={handlePrev} className="border text-3xl cursor-pointer" color="black" />
          <FaChevronRight onClick={handleNext} className="border text-3xl cursor-pointer" color="black" />
        </div>
        <div className="w-[598px] h-[252px] bg-white pl-11 pt-16 rounded-xl absolute left-10 bottom-10 border overflow-hidden mb-16">
          <p className="bg-blue-500 w-24 rounded-sm text-stone-100">
            Technology
          </p>
          <p className="text-2xl font-semibold">
            Grid system for better <br />
            Design User Interface
          </p>
          <p className="text-gray-400">August 20, 2022</p>
        </div>
      </div>

      
      
    </div>
  );
};

export default Main;



