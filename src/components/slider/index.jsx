import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BannerSlider() {
  const slides = [
    {
      title: "",
      image: "/bannerhtml.png",
      link: "/html", 
    },
    {
      title: "Siga no GitHub",
      image: "/bannergit.png",
      link: "https://github.com/adrianoads910-max/code-studio", // link externo
    },
    {
      title: "",
      image: "/bannercss.png",
      link: "/css", 
    },
    {
      title: "",
      image: "/bannerjavascript.png",
      link: "/javascript", 
    },
    {
      title: "",
      image: "/bannerreact.png",
      link: "/react", 
    },
    {
      title: "",
      image: "/bannerangular.png",
      link: "/angular", 
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <a
            href={slide.link}
            target={slide.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="block w-full h-full relative group"
          >
            {/* Imagem de fundo */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain"
            />

            {/* Overlay escuro suave para destacar texto */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all"></div>

            {/* Título centralizado */}
            <h2 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white text-xl md:text-3xl font-bold drop-shadow-lg">
              {slide.title}
            </h2>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
