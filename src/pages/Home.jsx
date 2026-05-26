import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductFlip from "../Components/ProductFlip";

const slideData = [
  {
    id: 1,
    image:
      "https://qx-shooz.myshopify.com/cdn/shop/files/banner-1.png?v=1731045553",
    subtitle: "STEP INTO STYLE",
    title: (
      <>
        Discover The Latest <br className="hidden md:block" /> Trends In
        Footwear
      </>
    ),
    desc: (
      <>
        From classic sneakers to trendy boots, our{" "}
        <br className="hidden md:block" /> collection has something for
        everyone.
      </>
    ),
    align: "lg:justify-end",
  },
  {
    id: 2,
    image:
      "https://qx-shooz.myshopify.com/cdn/shop/files/banner-2.png?v=1731045552",
    subtitle: "ELEVATE YOUR LOOK",
    title: (
      <>
        Find The Perfect Pair <br className="hidden md:block" /> Of Shoes To
        Complete.
      </>
    ),
    desc: (
      <>
        Explore our wide range of styles, colors, and{" "}
        <br className="hidden md:block" /> materials to find the perfect shoes
        for any occasion.
      </>
    ),
    align: "lg:justify-end",
  },
  {
    id: 3,
    image:
      "https://qx-shooz.myshopify.com/cdn/shop/files/banner-3.png?v=1731045552",
    subtitle: "COMFORT MEETS FASHION",
    title: (
      <>
        Discover Shoes That Look <br className="hidden md:block" /> Great And
        Feel Even Better.
      </>
    ),
    desc: (
      <>
        Our collection features comfortable and stylish footwear{" "}
        <br className="hidden md:block" /> designed to keep your feet happy all
        day long.
      </>
    ),
    align: "md:justify-start",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 0,
    });
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setTimeout(() => {
      AOS.refresh();
    }, 50);
  };

  const marqueeItems = (
    <>
      <div className="home-marquee-wrapper text-white font-bold whitespace-nowrap uppercase tracking-wider text-sm md:text-base flex items-center gap-3">
        <span>⚡ NEW ARRIVALS DROP</span>
      </div>
      <div className="home-marquee-wrapper text-white font-bold whitespace-nowrap uppercase tracking-wider text-sm md:text-base flex items-center gap-3">
        <span>📦 FREE SHIPPING ON ALL ORDERS</span>
      </div>
      <div className="home-marquee-wrapper text-white font-bold whitespace-nowrap uppercase tracking-wider text-sm md:text-base flex items-center gap-3">
        <span>🔥 COMFORT MEETS STYLE</span>
      </div>
      <div className="home-marquee-wrapper text-white font-bold whitespace-nowrap uppercase tracking-wider text-sm md:text-base flex items-center gap-3">
        <span>👟 PREMIUM QUALITY SNEAKERS</span>
      </div>
    </>
  );

  return (
    <>
      {/*hero slider */}
      <section className="relative w-full  overflow-hidden ">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          className="h-125 w-full"
        >
          {slideData.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="relative w-full h-125 overflow-hidden"
            >
              <img
                src={slide.image}
                alt={slide.subtitle}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div
                className="absolute inset-0 bg-black/30 z-10"
                aria-hidden="true"
              />

              <div
                className={`relative h-full max-w-7xl mx-auto px-6 md:px-18 flex items-center justify-center ${slide.align}`}
              >
                <div
                  key={`${slide.id}-${activeIndex === slideData.indexOf(slide)}`}
                  className="content flex flex-col items-start md:text-left text-white max-w-2xl z-20"
                >
                  <span
                    data-aos="fade-up"
                    className="text-[12px] md:text-[14px] font-medium tracking-[2px] mb-4 block"
                  >
                    {slide.subtitle}
                  </span>

                  <h2
                    data-aos="fade-up"
                    data-aos-delay="150"
                    className="text-[30px] md:text-[40px] font-semibold mb-8 md:whitespace-nowrap"
                  >
                    {slide.title}
                  </h2>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="text-[14px] md:text-[16px] font-medium"
                  >
                    {slide.desc}
                  </p>

                  <div data-aos="fade-up" data-aos-delay="450">
                    <a
                      href="#"
                      className="bg-[#b93d46] hover:bg-black text-white px-8 py-3 rounded-sm flex items-center gap-2 font-medium transition-all mt-10 "
                    >
                      SHOP NOW
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/*3 static card section*/}
      <section className="py-16  w-full">
        <div className="max-w-6xl w-full px-4  md:mx-auto md:px-10 grid grid-cols-1 md:grid-cols-3 lg:gap-10 md:gap-0 sm:gap-6 justify-items-center">
          <div className="lg:w-87.5 lg:h-75 overflow-hidden relative group md:w-54 md:h-80">
            <img
              src="//qx-shooz.myshopify.com/cdn/shop/files/grid-three-1.png?v=1731045511&width=1920"
              alt=""
              className="w-full h-full object-left object-cover scale-100 transition-all duration-3000 ease-in-out group-hover:opacity-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 top-20 flex flex-col item-start gap-5 px-8 md:item-center">
              <div className="text-[12px] uppercase text-[#000000] font-medium tracking-[2px] ">
                Trending
              </div>
              <h4 className="text-[30px] font-bold text-[#000000] leading-[1.3]">
                Men
                <br /> Collections
              </h4>
              <a
                href="/collections"
                className="text-[#ae3f4f] hover:text-black font-medium transition-all underline underline-offset-4 mb-3 uppercase"
              >
                Shop Now
              </a>
            </div>
          </div>

          <div className="lg:w-87.5 lg:h-75 overflow-hidden relative group md:w-54 md:h-80">
            <img
              src="//qx-shooz.myshopify.com/cdn/shop/files/grid-three-3.png?v=1731045510&width=1920"
              alt=""
              className="w-full h-full object-cover object-left scale-100 transition-all duration-3000 ease-in-out group-hover:opacity-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 top-20 flex flex-col item-start gap-5 px-8 md:item-center">
              <div className="text-[12px] uppercase text-[#000000] font-medium tracking-[2px] ">
                Latest
              </div>
              <h4 className="text-[30px] font-bold text-[#000000] leading-[1.3]">
                Women
                <br /> Collections
              </h4>
              <a
                href="/collections"
                className="text-[#b93d46] hover:text-black font-medium transition-all underline underline-offset-4 mb-3 uppercase"
              >
                Shop Now
              </a>
            </div>
          </div>

          <div className="lg:w-87.5 lg:h-75 overflow-hidden relative group md:w-54 md:h-80">
            <img
              src="//qx-shooz.myshopify.com/cdn/shop/files/grid-three-2.png?v=1731045516&width=1920"
              alt=""
              className="w-full h-full object-cover object-left scale-100 transition-all duration-3000 ease-in-out group-hover:opacity-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 top-20 flex flex-col item-start gap-5 px-8 md:item-center">
              <div className="text-[12px] uppercase text-[#000000] font-medium tracking-[2px] ">
                Comfort
              </div>
              <h4 className="text-[30px] font-bold text-[#000000] leading-[1.3]">
                Kid
                <br /> Collections
              </h4>
              <a
                href="/collections"
                className="text-[#b93d46] hover:text-black font-medium transition-all underline underline-offset-4 mb-3 uppercase"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*product flip*/}
      <ProductFlip />
      {/*infinity scrollbar*/}
      <section>
        <div className="w-full h-screen relative mb-10">
          <div className=" w-full h-full bg-[url('https://qx-shooz.myshopify.com/cdn/shop/files/wide-banner.png?v=1731045552')] bg-cover bg-center bg-no-repeat">
            <div className="relative left-115 top-40 max-w-xl md:max-w-3xl flex flex-col items-end text-right gap-4 md:gap-5">
              <div className="text-[14px] font-medium text-[#000000] uppercase ">
                Comfort meet fashion{" "}
              </div>
              <div className="font-bold text-[#000000] leading-normal">
                <h4 className="text-[45px]">
                  {" "}
                  Discover Shoes That Look Great <br />
                  And Feel Even Better.{" "}
                </h4>
              </div>
              <div className="text-[16px] text-[#000000] leading-no">
                Our collection features comfortable and stylish footwear
                designed to keep your feet happy all day long.
              </div>
              <a
                href="#"
                className="bg-[#b93d46] hover:bg-black text-white px-4 py-3 rounded-sm flex items-center gap-2 font-medium transition-all mt-10 max-w-40"
              >
                SHOP NOW
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            data-aos="fade"
            data-aos-duration="1000"
            className="home-marquee-container"
          >
            <div className="home-marquee-carousel">
              <div className="home-marquee-scroll-content">
                {marqueeItems}
                {marqueeItems}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
