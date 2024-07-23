import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true
  };

  const images = [
    "./assets/webp/accesorios-móvil.webp",
    "./assets/webp/accesorios-pc.webp",
    "./assets/webp/servicio-técnico.webp"
  ];

  return (
    <div className="w-[350px] md:w-[530px] max-w-3xl mx-auto py-20">
      <h2 className="text-center font-bold md:text-4xl lg:text-6xl font-black text-fuchsia-600 my-8"> Servicios K&A Cell </h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img loading="lazy" src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full rounded-lg shadow-xl" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;