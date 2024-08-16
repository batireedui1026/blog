import React from "react";

const Carousel = ({ slides, currentIndex }) => {
  return (
    <div
      className="flex h-full transition-all duration-150"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {slides.map((img, i) => (
        <div className={`min-w-full h-full`}>
          <img src={img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
