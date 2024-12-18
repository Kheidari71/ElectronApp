import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Updated module import

import "swiper/css"; // Basic Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles

import {useCheckboxContext} from "../../context/CheckboxContext"
import { useGalleryContex } from "../../context/GalleryContext";


const ImageSlider = () => {
  const {imageGroup}= useGalleryContex()
  const {isChecked} = useCheckboxContext();

  const images = {
    Nature :[
    "public/nature2.webp",
    "public/nature3.webp",
  
  ], 
  House :[
    "public/house1.jpeg",
    "public/house2.webp",
    "public/house3.jpeg",
"public/house4.jpeg"
  ], 
  Sky :[
    "public/sky1-.jpeg",
    "public/sky2.jpeg",
    
  ], 
}

  // Function to dynamically style navigation and pagination
  const customizeSwiper = (swiper) => {
    const nextButton = swiper.el.querySelector(".swiper-button-next");
    const prevButton = swiper.el.querySelector(".swiper-button-prev");
    const bullets = swiper.el.querySelectorAll(".swiper-pagination-bullet");

    if (nextButton && prevButton) {
      nextButton.classList.add(
        "text-white",
        "bg-gray-800",
        "rounded-full",
        "p-2",
        "hover:bg-gray-600",
        "transition-all",
        "duration-200"
      );
      prevButton.classList.add(
        "text-white",
        "bg-gray-800",
        "rounded-full",
        "p-2",
        "hover:bg-gray-600",
        "transition-all",
        "duration-200"
      );
    }

    bullets.forEach((bullet) =>
      bullet.classList.add(
        "bg-gray-800",
        "opacity-75",
        "hover:opacity-100",
        "transition-all",
        "duration-200"
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Enable modules
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={isChecked ? { delay: 3000 } : false}
        loop
        onSwiper={customizeSwiper}
      >
        {images[imageGroup].map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full max-h-no-drag rounded-md shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
