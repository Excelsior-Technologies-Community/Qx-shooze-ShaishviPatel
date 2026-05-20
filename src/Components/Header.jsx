import React from "react";
import { useState } from "react";
import "./Header.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import { DialogContentText } from "@mui/material";

const Header = () => {
  const [open, setOpen] = useState(false);
  const announcementContent = (
    <>
      <div className="announcement-wrapper py-2 text-white font-semibold whitespace-nowrap">
        <span className="announcement-item flex items-center gap-1">
          <span classNameName="text-[16px] sm:text-base">
            Enjoy 20% off your entire order with the code{" "}
            <span className="font-bold">SHOEFRESH20</span>.
          </span>
          <a
            className="inline-block underline text-[16px] transition-colors"
            href="/collections"
          >
            Dismiss
          </a>
        </span>
      </div>
      <div className="announcement-wrapper py-2 text-white font-semibold whitespace-nowrap">
        <span className="announcement-item flex items-center gap-1">
          <span className="font-semibold text-[16px] sm:text-base">
            Get 15% off your first purchase when you sign up for our newsletter.{" "}
            <span className="font-bold">SHOEFRESH20</span>.
          </span>
          <a
            className="inline-block underline text-[16px] transition-colors"
            href="/collections"
          >
            Dismiss
          </a>
        </span>
      </div>
      <div className="announcement-wrapper py-2 text-white font-semibold whitespace-nowrap">
        <span className="announcement-item flex items-center gap-1">
          <span className="text-[16px] sm:text-base">
            Enjoy 20% off your entire order with the code{" "}
            <span className="font-bold">SHOEFRESH20</span>.
          </span>
          <a
            className="inline-block underline text-[16px] transition-colors"
            href="/collections"
          >
            Dismiss
          </a>
        </span>
      </div>
      <div className="announcement-wrapper py-2 text-white font-semibold whitespace-nowrap">
        <span className="announcement-item flex items-center gap-1">
          <span className="font-semibold text-[16px] sm:text-base">
            Get 15% off your first purchase when you sign up for our newsletter{" "}
            <span className="font-bold">SHOEFRESH20</span>.
          </span>
          <a
            className="inline-block underline text-[16px] transition-colors"
            href="/collections"
          >
            Dismiss
          </a>
        </span>
      </div>
    </>
  );
  return (
    <>
      {/* announcement bar */}
      <div
        data-aos="fade"
        data-aos-duration="1000"
        className="announcement-bar-container"
      >
        <div className="announcement-bar-carousel">
          <div className="announcement-scroll-content">
            {announcementContent}
            {announcementContent}
          </div>
        </div>
      </div>
      {/*navbar*/}
      <div className="bg-[#f5f5f5] shadow-md text-[#000000]">
        <div className=" text-center navigationbar container mx-auto lg:flex items-center lg:justify-between py-3 md:py-5 max-w-6xl">
          <div className="text-lg md:text-[16px] font-medium shrink-0">
            One Day Delivery Available
          </div>

          <div className="hidden lg:flex items-center space-x-6 font-medium">
            <div className="group flex gap-2">
              <a
                href="#"
                className=" inline-block items-center   hover:text-[#ae3f4f]"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Login
              </a>
              /
              <a
                href="#"
                className=" inline-block items-center  hover:text-[#ae3f4f]"
              >
                Register
              </a>
            </div>

           {/*Dialogbox*/}
<Dialog
  open={open}
  data-aos="fade-down"
  data-aos-duration="2000"
  onClose={() => setOpen(false)}
  /* PaperProps allows customizing the dialog container directly */
  PaperProps={{
    className: " p-0 relative rounded-none overflow-hidden",
    style: { 
      borderRadius: 0,
      border: '1px solid rgba(0, 0, 0, 0.12)', 
    } 
  }}
>
  {/* Close Button 'X' in top right corner */}
  <button 
    onClick={() => setOpen(false)} 
    className="absolute top-4 right-4 hover:text-black text-2xl font-light focus:outline-none"
  >
    &#x2715;
  </button>

  <div className=" overflow-hidden w-125 h-130 flex flex-col items-center justify-center text-center font-semibold">
    
    {/* Header Content Section with exact padding/centering */}
    <div className="my-8 pt-20 px-15 font-bold ">
      {/* Title */}
      <h3 className="text-[30px] tracking-wide text-black mb-4">Login</h3>
      <p className="text-[16px] text-gray-600 font-normal">Please enter your e-mail and password:</p>
    </div>

    {/* Custom Styled Full-Width Inputs */}
    <div className="w-full px-10 flex flex-col gap-5">
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-3 border border-gray-200 focus:outline-none focus:border-gray-300 text-[16px] placeholder-gray-500 transition-colors rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-3 border border-gray-200 focus:outline-none focus:border-gray-300 text-[16px] placeholder-gray-500 transition-colors rounded"
        required
      />
    </div>

    {/* Forgot Password Link - Centered relative to middle content area */}
      <a href="#" className=" text-[16px] text-gray-500 underline mb-8 hover:text-black relative top-5 left-35">
        Forgot your password?
      </a>


    {/* Middle Section with padding for Link & Button */}
    <div className="w-full pt-2 pb-2 px-10 flex flex-col items-center ">
      
      <button
        type="submit"
        className="w-full bg-[#ae3f4f] text-white py-5 font-medium tracking-wider uppercase text-[15px] hover:bg-[#000000] transition-colors"
        onClick={() => setOpen(false)}
      >
        LOGIN
      </button>
    </div>

    {/* Footer Link - Centered vertically and horizontally in the remaining space */}
    <div className="pb-25 pt-3 px-10 text-[17px] text-gray-500">
      New customer?{" "}
      <a href="#" className="underline text-gray-600 hover:text-black">
        Register
      </a>
    </div>
  </div>
</Dialog>

            <div className="flex items-center  gap-5 shrink-0 ml-2">
              {/* facebook Icon */}
              <a href="#" className="" aria-label="Facebook">
                <FacebookIcon fontSize="small" />
              </a>
              {/* twitter Icon */}
              <a href="#" className="" aria-label="Twitter">
                <TwitterIcon fontSize="small" />
              </a>
              {/* instagram Icon */}
              <a href="#" className="" aria-label="Instagram">
                <InstagramIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-full py-3">
        <div className="container max-w-6xl mx-auto  text-[#000000] py-5 flex items-center justify-between gap-2">
          <div>
            <img src="/logo (1).webp" alt="Shooz logo" />
          </div>
          <div className="space-x-6 flex items-center gap-5 ">
            <a href="" className="nav-link inline-block   hover:text-[#ae3f4f]">
              Home
            </a>
            <a
              href="/products"
              className="nav-link inline-block items-center hover:text-[#ae3f4f]"
            >
              Shop <i className="fa-solid fa-chevron-down text-xs"></i>
            </a>
            <a
              href="/about"
              className="nav-link inline-block items-center hover:text-[#ae3f4f]"
            >
              Product<i className="fa-solid fa-chevron-down text-xs"></i>
            </a>
            <a
              href="/contact"
              className="nav-link inline-block items-center hover:text-[#ae3f4f]"
            >
              Blog<i className="fa-solid fa-chevron-down text-xs"></i>
            </a>
            <a
              href="/blog"
              className="nav-link inline-block items-center hover:text-[#ae3f4f]"
            >
              Pages<i className="fa-solid fa-chevron-down text-xs"></i>
            </a>
            <a
              href="/faq"
              className="nav-link inline-block items-center hover:text-[#ae3f4f]relative"
            >
              Buy Now<i className=" fa-solid fa-chevron-down text-xs"></i>
              <span className=" px-3 py-0.5 text-xs text-white  absolute -top-5 -right-5 bg-[#34bf49] rounded-full">
                {" "}
                sale
              </span>
            </a>
          </div>

          <div className="space-x-6 flex items-center">
            <SearchIcon fontSize="medium" />
            <PersonOutlinedIcon fontSize="medium" />
            <FavoriteBorderOutlinedIcon fontSize="medium" />
            <div className="flex items-center">
              <ShoppingBagOutlinedIcon fontSize="medium" />
              <span>(0)</span>
            </div>
          </div>
        </div>
      </div>
      {/* mobile view navbar design */}
      <div className="lg:hidden sm:block md:block w-full py-3">
        <div className="container max-w-6xl mx-auto  text-[#000000] px-10 py-5 flex items-center justify-between gap-2 sm:px-5 sm:gap-5">
          <div className="flex items-center gap-5 sm:gap-2">
            <i class="fa-solid fa-bars"></i>
            <SearchIcon fontSize="medium" />
          </div>
          <div className="flex items-center space-x-6 sm:space-x-2">
            <img src="/logo (1).webp" alt="Shooz logo" />
          </div>
          <div className="space-x-4 flex items-center sm:mx-3">
            <PersonOutlinedIcon fontSize="medium" />
            <FavoriteBorderOutlinedIcon fontSize="medium" />
            <div className="flex items-center">
              <ShoppingBagOutlinedIcon fontSize="medium" />
              <span>(0)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
