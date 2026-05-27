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
        <div className="bg-[#ffba17] h-2 w-2 rounded-full flex items-center justify-center"></div>
        <span> NEW ARRIVALS DROP</span>
      </div>
      <div className="home-marquee-wrapper text-white font-bold whitespace-nowrap uppercase tracking-wider text-sm md:text-base flex items-center gap-3">
        <div className="bg-[#ffba17] h-2 w-2 rounded-full flex items-center justify-center"></div>
        <span> FREE SHIPPING ON ALL ORDERS</span>
      </div>
      <div className="home-marquee-wrapper text-white font-bold whitespace-nowrap uppercase tracking-wider text-sm md:text-base flex items-center gap-3">
        <div className="bg-[#ffba17] h-2 w-2 rounded-full flex items-center justify-center"></div>
        <span> PREMIUM QUALITY SNEAKERS</span>
      </div>
      <div className="home-marquee-wrapper text-white font-bold whitespace-nowrap uppercase tracking-wider text-sm md:text-base flex items-center gap-3">
        <div className="bg-[#ffba17] h-2 w-2 rounded-full flex items-center justify-center"></div>
        <span> PREMIUM QUALITY SNEAKERS</span>
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
        <div className="w-full h-screen relative mb-10 overflow-hidden">
          {/* Background Banner: desktop par right justify kiya aur padding di */}
          <div className="w-full h-full bg-[url('https://qx-shooz.myshopify.com/cdn/shop/files/wide-banner.png?v=1731045552')] bg-cover bg-center bg-no-repeat flex items-center justify-center lg:justify-end lg:pr-40 px-6">
            <div className="w-full max-w-xl md:max-w-3xl flex flex-col items-center lg:items-end text-center lg:text-right gap-4 md:gap-5">
              {/* Subtitle */}
              <div className="text-[14px] font-medium text-[#000000] uppercase tracking-wider">
                Comfort meets fashion
              </div>

              {/* Main Title */}
              <div className="font-bold text-[#000000] ">
                <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] leading-[1.4]">
                  Discover shoes that look great{" "}
                  <br className="hidden sm:inline" />
                  and feel even better
                </h4>
              </div>

              {/* Description */}
              <div className="text-[16px] sm:text-base text-[#000000] max-w-md md:max-w-3xl">
                Our collection features comfortable and stylish footwear
                designed to keep your feet happy all day long.
              </div>

              <a
                href="#"
                className="bg-[#b93d46] hover:bg-black text-white px-6 py-3 rounded-sm flex items-center justify-center gap-2 font-medium transition-all mt-4 w-40 lg:self-end"
              >
                SHOP NOW
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Marquee Section */}
          <div
            data-aos="fade"
            data-aos-duration="1000"
            className="home-marquee-container absolute bottom-0 left-0 w-full"
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
      {/*boots and booties */}
      <section className="w-full py-8">
        <div className="max-w-6xl w-full px-4 flex flex-col item-center text-center md:mx-auto md:px-10 lg:gap-5 md:gap-6 gap-6 justify-items-center ">
          <div className="text-[#808080] font-semibold text-[14px] uppercase">
            Stylish and comfortable for every season
          </div>
          <h3 className="text-[30px] font-bold text-[#000000]">
            Boots & Booties
          </h3>
          <div className="text-[#808080] text-[16px] max-w-2xl mx-auto leading-relaxed font-medium">
            Check out our collection of the top New Products <br />
            that encourage conversion.
          </div>
        </div>
      </section>
      {/* types of footwear */}
      <section className="w-full mb-10">
        <div className="max-w-6xl w-full flex justify-center gap-6 sm:px-5  mx-auto lg:flex lg:gap-5 lg:justify-between md:gap-6 py-4">
          <div className="w-81.75 relative  group">
            <img
              src="//qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=800"
              alt=""
              className="w-full h-full object-cover scale-100 transition-all ease-in-out  duration-1000 group-hover:opacity-100 group-hover:scale-110 group-hover:cursor-pointer "
            />
            <div className="w-46.25 h-20 bg-[#ffffff] absolute inset-0 top-45 md:top-35 lg:top-32 left-1/2 transform -translate-x-1/2 translate-y-1/2  duration-300 flex items-center justify-center font-medium text-[#000000] group-hover:bg-[#ae3f4f]">
              <a href="">
                {" "}
                <h4 className="text-[18px] px-5 leading-relaxed text-center font-semibold">
                  {" "}
                  Athletic Footwear{" "}
                </h4>
              </a>
              <p className="absolute top-2 right-2  text-[#808080]">8</p>
            </div>
          </div>
          <div className="w-81.75 relative  group hidden sm:block">
            <img
              src="//qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=800"
              alt=""
              className="w-full h-full object-cover scale-100 transition-all ease-in-out  duration-1000 group-hover:opacity-100 group-hover:scale-110 group-hover:cursor-pointer "
            />
            <div className="w-48.25 h-20 bg-[#ffffff] absolute inset-0 top-45 md:top-35 lg:top-32 left-1/2 transform -translate-x-1/2 translate-y-1/2  duration-300 flex items-center justify-center font-medium text-[#000000] group-hover:bg-[#ae3f4f]">
              <a href="">
                {" "}
                <h3 className="text-[18px] text-center leading-relaxed font-semibold">
                  Luxury Leather <br />
                  Shoes
                </h3>
              </a>
              <p className="absolute top-2 right-2  text-[#808080]">8</p>
            </div>
          </div>
          <div className="w-81.75 relative  group hidden md:block">
            <img
              src="//qx-shooz.myshopify.com/cdn/shop/collections/col-1.png?v=1731657959&width=800"
              alt=""
              className="w-full h-full object-cover scale-100 transition-all ease-in-out  duration-1000 group-hover:opacity-100 group-hover:scale-110 group-hover:cursor-pointer "
            />
            <div className="w-49.25 h-20 bg-[#ffffff] absolute inset-0 md:top-35  lg:top-32 left-1/2 transform -translate-x-1/2 translate-y-1/2  duration-300 flex items-center justify-center font-medium text-[#000000] group-hover:bg-[#ae3f4f]">
              <a href="">
                {" "}
                <h4 className="text-[18px] text-center pt-2 leading-relaxed font-semibold">
                  Sustainable <br />
                  Footwear{" "}
                </h4>
              </a>
              <p className="absolute top-1 right-2  text-[#808080]">8</p>
            </div>
          </div>
          <div className="w-81.75 relative  group hidden lg:block">
            <img
              src="//qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=800"
              alt=""
              className="w-full h-full object-cover scale-100 transition-all ease-in-out  duration-1000 group-hover:opacity-100 group-hover:scale-110 group-hover:cursor-pointer "
            />
            <div className="w-46.25 h-20 bg-[#ffffff] absolute inset-0 top-32 left-1/2 transform -translate-x-1/2 translate-y-1/2  duration-300 flex items-center justify-center font-medium text-[#000000] group-hover:bg-[#ae3f4f]">
              <a href="">
                {" "}
                <h4 className="text-[18px] text-center pt-2 leading-relaxed font-semibold">
                  Sandals & <br />
                  Slides
                </h4>
              </a>
              <p className="absolute top-2 right-2  text-[#808080]">8</p>
            </div>
          </div>
        </div>
      </section>
      {/*colllage section grid section */}
      <section className="w-full mb-10 bg-[#333333] h-full">
        <div className="max-w-6xl w-full md:mx-auto md:px-10 py-10 border border-white">
          <div className="max-w-4xl w-full md:mx-5 lg:mx-auto flex flex-col items-center text-center gap-6">
            <div className=" uppercase text-[#ffffff] tracking-[2px] font-medium">
              Fashion Sneakers
            </div>
            <h1 className="lg:max-w-full md:max-w-2xl text-[#ffffff] text-[42px] font-bold leading-[1.3]">
              Timeless styles for everyday wear
            </h1>
            <div className="text-[#ffffff] text-[16px] leading-relaxed font-medium">
              High-performance footwear for sports and <br /> workouts
            </div>
          </div>
          <div className=" w-full py-8 md:mx-auto grid grid-cols-1 md:grid-cols-3 lg:gap-5 md:gap-0 sm:gap-6 justify-items-center">
            <div className="lg:w-87.5 lg:h-75 overflow-hidden relative group md:w-54 md:h-80">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-1.png?v=1731045532&width=1920"
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
                src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-2.png?v=1731045532&width=1920"
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
                src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-3.png?v=1731045526&width=1920"
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
        </div>
      </section>
    </>
  );
};

export default Home;
