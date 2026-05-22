import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const Home = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const heroslide = [
    {
      id: 1,
      image: "https://qx-shooz.myshopify.com/cdn/shop/files/banner-1.png?v=1731045553",
      title: "Discover The Latest Trends In Footwear",
      subtitle: "Step Into Style",
      description: "From classic sneakers to trendy boots, our collection has something for everyone.",
      btnText: "Shop Now",
      link: "/collections",
    },
    {
      id: 2,
      image: "https://qx-shooz.myshopify.com/cdn/shop/files/banner-2.png?v=1731045554",
      title: "Fresh Picks For Every Season",
      subtitle: "New Arrivals",
      description: "Bold silhouettes, soft comfort, and a clean finish built to stand out on every step.",
      btnText: "Explore Now",
      link: "/collections",
    },
    {
      id: 3,
      image: "https://qx-shooz.myshopify.com/cdn/shop/files/banner-3.png?v=1731045555",
      title: "Walk The City In Style",
      subtitle: "Bold Comfort",
      description: "Every pair is designed to bring all-day comfort with a fashion-first edge.",
      btnText: "View Collection",
      link: "/collections",
    },
  ];

  const goToSlide = (direction) => {
    if (!swiperInstance) return;
    if (direction === "prev") {
      swiperInstance.slidePrev();
    } else {
      swiperInstance.slideNext();
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f4efe9]">
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          speed={1000}
        //   autoplay={{ delay: 4500, disableOnInteraction: false }}
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={setSwiperInstance}
          className="group h-100 w-full"
        >
          {heroslide.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full overflow-hidden">
              
              {/* Swiper provide karta hai render function jisme 'isActive' milta hai */}
              {({ isActive }) => (
                <>
                  {/* Image Zoom Animation */}
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      className={`h-full w-full object-cover transition-transform duration-1400 ease-out ${
                        isActive ? "scale-105" : "scale-100"
                      }`}
                    />
                  </div>
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_32%)]" />

                  {/* Text Contents */}
                  <div className="absolute  right-0 inset-0 flex items-center px-6 sm:px-10 lg:px-16 xl:px-24">
                    <div
                      className={` ml-auto max-w-3xl text-left text-white transition-all duration-700 ease-out ${
                        isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                      }`}
                    >
                      {/* Subtitle */}
                      <span
                        className={`mb-4 block text-[11px] font-semibold uppercase tracking-[0.35em] transition-all duration-700 delay-100 ${
                          isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                        }`}
                      >
                        {slide.subtitle}
                      </span>
                      
                      {/* Title */}
                      <h1
                        className={` text-[16px] font-semibold leading-tight text-white sm:text-5xl  transition-all duration-700 delay-200 ${
                          isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}
                      >
                        {slide.title}
                      </h1>
                      
                      {/* Description */}
                      <p
                        className={`mt-6 max-w-lg text-base leading-8 text-white/85 sm:text-lg transition-all duration-700 delay-300 ${
                          isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}
                      >
                        {slide.description}
                      </p>
                      
                      {/* Button */}
                      <a
                        href={slide.link}
                        className={`mt-8 inline-flex items-center gap-3 bg-[#b94f5e] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-700 delay-500 hover:bg-[#a54452] ${
                          isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}
                      >
                        {slide.btnText}
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        
      </div>
    </section>
  );
};

export default Home;