import React, { useState } from "react";
import {
  bestSellerProducts,
  featuredProducts,
  newArrivalProducts,
} from "../data/productData";

export default function ProductFlip() {
  const [activeTab, setActiveTab] = useState("FEATURED");

  const visibleProductsByTab = {
    FEATURED: featuredProducts,
    "NEW ARRIVALS": newArrivalProducts,
    "BEST SELLER": bestSellerProducts,
  };

  const visibleProducts = visibleProductsByTab[activeTab] ?? [];

  return (
    <section className="bg-white py-12">
      <div className="px-4 md:px-16 w-full flex flex-col items-center justify-center">
        <span
          data-aos="fade-up"
          data-aos-duration="700"
          className="uppercase font-medium text-center text-xs tracking-[2px] opacity-60 mb-4"
        >
          The Latest Trends In Athletic Footwear
        </span>
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="700"
          className="font-semibold text-4xl md:text-6xl mb-8 text-black text-center"
        >
          Sneakers & Kicks
        </h2>

        <div
          data-aos="fade-up"
          data-aos-delay="180"
          data-aos-duration="700"
          className="flex gap-4 sm:gap-8 md:gap-12 relative pb-2 justify-center border-b border-gray-200 w-full max-w-md px-4 mx-auto "
        >
          {["FEATURED", "NEW ARRIVALS", "BEST SELLER"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 font-medium text-sm whitespace-nowrap tracking-wider transition-colors ${
                activeTab === tab
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="container max-w-6xl px-4 lg:px-0 py-10 mx-auto">
        <div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 "
        >
          {visibleProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden bg-white p-2 flex flex-col justify-end "
              data-aos="zoom-in-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="650"
              data-aos-once="true"
            >
              <div className="relative h-80 w-full rounded overflow-hidden bg-gray-50 flex items-center justify-center ">
                <img
                  alt={product.name}
                  className="object-cover w-full h-full absolute inset-0 transition-all duration-300 ease-out opacity-100 group-hover:opacity-0 group-hover:scale-105"
                  src={product.img1}
                />
                <img
                  alt={`${product.name} alternate`}
                  className="object-cover w-full h-full absolute inset-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-105"
                  src={product.img2}
                />
              </div>

              <div className="relative z-10 pt-4 pb-2 bg-white transition-transform duration-300 ease-out group-hover:-translate-y-20">
                <strong className="block font-medium text-black text-sm mb-0.5">
                  ${product.price.toFixed(2)}
                </strong>
                <h3 className="text-sm md:text-base font-medium text-gray-800 truncate">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{product.brand}</p>
              </div>

              {/* Add to Cart button section with hover transformation */}
              <div className="absolute inset-x-0 bottom-0 py-4 bg-white transition-transform duration-300 ease-out transform translate-y-full group-hover:translate-y-0 z-20 ">
                <div className="flex items-start justify-between gap-3.5 px-2">
                  <div className="flex text-black font-medium text-[14px] rounded transition-colors gap-2 item-start ">
                    <svg
                      class="svg-cart"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.44783 0.672348C2.53673 0.679152 2.66061 0.696469 2.79331 0.757114C2.96778 0.836849 3.11564 0.965084 3.21924 1.12652C3.29805 1.24931 3.33271 1.3695 3.35202 1.45654C3.36841 1.53046 3.38038 1.61446 3.39018 1.68326C3.39084 1.68788 3.39149 1.69244 3.39213 1.69693L3.6259 3.3333L14.0399 3.3333C14.1346 3.33326 14.2439 3.33322 14.3387 3.34149C14.4453 3.35078 14.6055 3.37492 14.7675 3.46933C14.9722 3.58867 15.1279 3.77684 15.2069 4.0003C15.2693 4.1771 15.263 4.33897 15.2522 4.44546C15.2426 4.54012 15.2221 4.64746 15.2043 4.74051L14.3144 9.41289C14.2592 9.70245 14.2112 9.95482 14.1554 10.1623C14.0959 10.3832 14.0167 10.5985 13.8774 10.8009C13.6669 11.1065 13.3756 11.3475 13.036 11.4971C12.8112 11.5961 12.5849 11.6336 12.3567 11.6506C12.1425 11.6667 11.8856 11.6666 11.5908 11.6666H5.83923C5.52932 11.6666 5.25993 11.6667 5.03602 11.6495C4.79813 11.6312 4.562 11.5909 4.32933 11.484C3.97906 11.3231 3.68275 11.0644 3.47608 10.739C3.33879 10.5228 3.26704 10.2943 3.21686 10.061C3.16964 9.84149 3.13333 9.57457 3.09156 9.26748L2.38742 4.09204L2.08855 1.99997H1.33341C0.965225 1.99997 0.666748 1.70149 0.666748 1.3333C0.666748 0.96511 0.965225 0.666633 1.33341 0.666633H2.20419C2.20872 0.666633 2.21333 0.666632 2.218 0.66663C2.28749 0.666603 2.37234 0.66657 2.44783 0.672348ZM3.81121 4.66663L4.40954 9.06436C4.45541 9.40151 4.48521 9.61717 4.52038 9.78065C4.55379 9.93598 4.58247 9.99404 4.60155 10.0241C4.67045 10.1325 4.76921 10.2188 4.88597 10.2724C4.91831 10.2873 4.97971 10.3079 5.13812 10.32C5.30485 10.3328 5.52256 10.3333 5.86282 10.3333H11.5681C11.8921 10.3333 12.0988 10.3329 12.2574 10.321C12.4077 10.3098 12.4668 10.2908 12.4987 10.2768C12.6119 10.2269 12.709 10.1466 12.7792 10.0447C12.7989 10.016 12.8287 9.96143 12.8678 9.81594C12.9091 9.66233 12.9482 9.45941 13.0088 9.14107L13.8611 4.66663H3.81121ZM4.66675 14C4.66675 13.2636 5.2637 12.6666 6.00008 12.6666C6.73646 12.6666 7.33341 13.2636 7.33341 14C7.33341 14.7363 6.73646 15.3333 6.00008 15.3333C5.2637 15.3333 4.66675 14.7363 4.66675 14ZM10.0001 14C10.0001 13.2636 10.597 12.6666 11.3334 12.6666C12.0698 12.6666 12.6667 13.2636 12.6667 14C12.6667 14.7363 12.0698 15.3333 11.3334 15.3333C10.597 15.3333 10.0001 14.7363 10.0001 14Z"
                        fill="black"
                      ></path>
                    </svg>
                    ADD TO CART
                  </div>
                  <div className="flex  text-black font-medium  rounded transition-colors gap-2 item-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.23916 5.49523C3.23497 6.33334 2.53223 7.31821 2.17712 7.88049C2.15356 7.9178 2.13708 7.94393 2.12331 7.96661C2.11422 7.98158 2.10822 7.99193 2.10421 7.99915C2.10421 7.99942 2.10421 7.99969 2.10421 7.99996C2.10421 8.00023 2.10421 8.0005 2.10421 8.00077C2.10822 8.00799 2.11422 8.01834 2.12331 8.03331C2.13708 8.05599 2.15356 8.08212 2.17712 8.11943C2.53223 8.68171 3.23497 9.66658 4.23916 10.5047C5.24179 11.3415 6.50476 12 8.00031 12C9.49586 12 10.7588 11.3415 11.7615 10.5047C12.7657 9.66658 13.4684 8.68171 13.8235 8.11943C13.8471 8.08212 13.8635 8.05599 13.8773 8.03331C13.8864 8.01834 13.8924 8.00798 13.8964 8.00077C13.8964 8.0005 13.8964 8.00023 13.8964 7.99996C13.8964 7.99969 13.8964 7.99942 13.8964 7.99915C13.8924 7.99194 13.8864 7.98158 13.8773 7.96661C13.8635 7.94393 13.8471 7.9178 13.8235 7.88049C13.4684 7.31821 12.7657 6.33334 11.7615 5.49523C10.7588 4.65843 9.49586 3.99996 8.00031 3.99996C6.50476 3.99996 5.24179 4.65843 4.23916 5.49523ZM3.38481 4.47158C4.53721 3.50977 6.09253 2.66663 8.00031 2.66663C9.90809 2.66663 11.4634 3.50977 12.6158 4.47158C13.7666 5.43208 14.5557 6.54282 14.9508 7.16852C14.9561 7.17679 14.9614 7.18523 14.9669 7.19385C15.0453 7.31728 15.1471 7.47753 15.1986 7.70207C15.2401 7.88337 15.2401 8.11655 15.1986 8.29785C15.1471 8.52239 15.0453 8.68264 14.9669 8.80607C14.9614 8.81469 14.9561 8.82313 14.9508 8.83139C14.5557 9.4571 13.7666 10.5678 12.6158 11.5283C11.4634 12.4901 9.90809 13.3333 8.00031 13.3333C6.09253 13.3333 4.53721 12.4901 3.38481 11.5283C2.23397 10.5678 1.44495 9.4571 1.04979 8.8314C1.04457 8.82313 1.03921 8.81469 1.03373 8.80607C0.955318 8.68264 0.853509 8.52239 0.802041 8.29785C0.760485 8.11655 0.760485 7.88337 0.802041 7.70207C0.853509 7.47753 0.955319 7.31727 1.03373 7.19385C1.03921 7.18523 1.04457 7.17679 1.04979 7.16852C1.44495 6.54282 2.23397 5.43208 3.38481 4.47158ZM8.00031 6.66663C7.26393 6.66663 6.66698 7.26358 6.66698 7.99996C6.66698 8.73634 7.26393 9.33329 8.00031 9.33329C8.73669 9.33329 9.33364 8.73634 9.33364 7.99996C9.33364 7.26358 8.73669 6.66663 8.00031 6.66663ZM5.33364 7.99996C5.33364 6.5272 6.52755 5.33329 8.00031 5.33329C9.47307 5.33329 10.667 6.5272 10.667 7.99996C10.667 9.47272 9.47307 10.6666 8.00031 10.6666C6.52755 10.6666 5.33364 9.47272 5.33364 7.99996Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="svg-heart"
                      width="20"
                      height="20"
                      viewBox="0 0 14 13"
                      fill="none"
                    >
                      <path
                        d="M6.66733 1.01902C8.23333 -0.386666 10.6533 -0.34 12.1617 1.17157C13.6702 2.68315 13.722 5.09133 12.3191 6.662L6.6666 12.3233L1.01425 6.662C-0.388635 5.09133 -0.336195 2.67934 1.17157 1.17157C2.68105 -0.3379 5.09679 -0.388753 6.66733 1.01902ZM11.218 2.1134C10.2186 1.11196 8.60507 1.07134 7.558 2.01125L6.66793 2.81016L5.7774 2.01187C4.72732 1.07065 3.11671 1.11205 2.11438 2.11438C1.12122 3.10754 1.07136 4.6982 1.98662 5.7488L6.6666 10.4362L11.3467 5.7488C12.2623 4.6978 12.2127 3.11017 11.218 2.1134Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      class="icon icon-add-compare icon--full-color"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.6667 13.3334C10.5349 13.3334 10.406 13.2943 10.2964 13.221C10.1868 13.1478 10.1013 13.0437 10.0509 12.9219C10.0005 12.8001 9.98725 12.6661 10.013 12.5368C10.0387 12.4075 10.1021 12.2887 10.1954 12.1954L12.3907 10.0001H4.00002C3.82321 10.0001 3.65364 9.92987 3.52862 9.80485C3.40359 9.67982 3.33335 9.51025 3.33335 9.33344C3.33335 9.15663 3.40359 8.98706 3.52862 8.86204C3.65364 8.73701 3.82321 8.66678 4.00002 8.66678H14C14.1319 8.6668 14.2607 8.70592 14.3703 8.77917C14.4799 8.85243 14.5654 8.95654 14.6158 9.07834C14.6663 9.20014 14.6795 9.33416 14.6537 9.46346C14.628 9.59277 14.5646 9.71154 14.4714 9.80478L11.138 13.1381C11.013 13.2631 10.8435 13.3334 10.6667 13.3334Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M12 6.66678H2.00002C1.86819 6.66675 1.73932 6.62763 1.62972 6.55438C1.52011 6.48112 1.43468 6.37701 1.38424 6.25521C1.33379 6.13341 1.32059 5.99939 1.3463 5.87009C1.37201 5.74079 1.43548 5.62201 1.52869 5.52878L4.86202 2.19544C4.98776 2.074 5.15616 2.00681 5.33096 2.00833C5.50575 2.00984 5.67296 2.07996 5.79657 2.20356C5.92017 2.32717 5.99028 2.49438 5.9918 2.66917C5.99332 2.84397 5.92613 3.01237 5.80469 3.13811L3.60935 5.33344H12C12.1768 5.33344 12.3464 5.40368 12.4714 5.5287C12.5964 5.65373 12.6667 5.8233 12.6667 6.00011C12.6667 6.17692 12.5964 6.34649 12.4714 6.47151C12.3464 6.59654 12.1768 6.66678 12 6.66678Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
