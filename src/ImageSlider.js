import React, { useState } from "react";



const CustomSlider = () => {
  const images = [
    { src: require('./samsung-ecommerce .png'), description: "Samsung E-commerce" },
    { src: require('./JOB-FINDER.png'), description: "Job Finder Website" },
    { src: require('./portfolio.png'), description: "Portoflio Website" },
    { src: require('./POS.png'), description: "Point Of Sales System" },
    { src: require('./employee-system.png'), description: "Employee Management System" },
    { src: require('./APPLICANT.png'), description: "Applicant Portal" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 3; // Number of images to display at once

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % (images.length - itemsToShow + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - itemsToShow : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          width: `${(images.length / itemsToShow) * 90}%`,
          maxWidth: "1200px",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-1/3 flex-shrink-0 p-2"
            style={{ width: `${100 / itemsToShow}%` }}
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-60 object-cover rounded-md shadow-md"
            />
            <p className="text-center mt-2">{image.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        {">"}
      </button>
    </div>
  );
};

export default CustomSlider;
