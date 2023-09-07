import React from 'react';
// import Footer from "../components/Footer";
import Header from '../components/Header';
import { useState } from 'react';
import { data } from '../data/Data';
import { FaBed, FaBath, FaLandmark } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { SiCashapp } from 'react-icons/si';
import { AiFillPushpin } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [house, setHouse] = useState(data);

  // const filterType = (category) => {
  //   setHouse(
  //     data.filter((item) => {
  //       return item.category === category;
  //     })
  //   );
  // };

  return (
    <div className=" bg-[#fff]">
      <div
        className="  bg-cover bg-center  "
        style={{ backgroundImage: "url('./heroimg.jpg')" }}
      >
        <Header />
        <div className="flex  justify-evenly items-center h-[500px]  flex-col">
          <div className="flex flex-col text-white bg-[#287dcd23] self-center items-center justify-center ">
            <h1 className="text-[18px] relative z-50  md:text-[60px]  mt-4 text-center  text-[#fff]  font-bold ">
              We are here to make your dreams come true
            </h1>
            <span className="text-[18px] md:text-[40px] font-normal text-[#fff] self-center  ">
              Search for budget-friendly houses in your nearest location
            </span>
          </div>
          <button className="bg-[#287CCD] w-[120px] h-[40px] rounded-[5px] text-white">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justify-center -mt-10 items-center">
        <div className="md:w-[900px] sm:w-[900px] gap-2 md:h-[110px] bg-[#fff] shadow-[0px_8px_16px_#D0D2D5] rounded-[8px] ">
          <h1 className="text-[22px] p-3 font-bold">
            Search for the best homes
          </h1>
          <div className="flex justify-center text-[#000] items-center gap-2">
            <input
              type="text"
              placeholder="location"
              className="focus:bg-transparent focus:ring-2 p-2 focus:border-[#287CCD]"
            />
            <IoLocation className="fill-[#287CCD]" />
            <input
              type="text"
              placeholder="type"
              className="focus:bg-transparent focus:ring-2 p-2 focus:border-[#287CCD]"
            />
            <AiFillPushpin className="fill-[#287CCD]" />
            <input
              type="text"
              placeholder="budget"
              className="focus:bg-transparent focus:ring-2 p-2 focus:border-[#287CCD]"
            />
            <SiCashapp className="fill-[#287CCD]" />
            <button className="bg-[#287CCD] w-[120px] h-[40px] rounded-[5px] text-white">
              Search Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full  mt-5 gap-2 bg-[#fff] shadow-[0px_8px_16px_#D0D2D5] rounded-[8px]  ">
        <div className="flex justify-between p-4">
          <h1 className="text-[22px] font-bold">Popular Villas</h1>
          <span
            onClick={() => setHouse(data)}
            className="text-[#287CCD] font-bold cursor-pointer"
          >
            View all
          </span>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 text-[#000] place-items-center gap-2">
          {house.map((item, index) => (
            <div
              key={index}
              className="w-[400px] flex flex-col hover:scale-105 duration-300 cursor-pointer shadow-[0px_8px_16px_#D0D2D5] p-2 h-[410px] bg-[#fff] rounded-[8px]"
            >
              <div className="flex items-center">
                <NavLink to={`/product/${item.id}`}>
                  <img
                  src={item.image}
                  alt={item.name}
                  className=" w-[380px] h-[250px] rounded-[8px]"
                />
                </NavLink>
                
              </div>
              <div>
                <h1 className="text-[13px] p-2 md:text-base font-bold">
                  {item.name}
                </h1>
              </div>
              <div className="flex justify-evenly text-slate-500 gap-2">
                <span className="flex justify-center items-center gap-2 ">
                  {item.bed}
                  <FaBed className="fill-[#287CCD]" />
                </span>
                <span className="flex justify-center items-center gap-2 ">
                  {item.bath}
                  <FaBath className="fill-[#287CCD]" />
                </span>
                <span className="flex justify-center items-center gap-2 ">
                  {item.landSize}
                  <FaLandmark className="fill-[#287CCD]" />
                </span>
                <span className="flex justify-center items-center gap-2 ">
                  <IoLocation className="fill-[#287CCD]" />
                  {item.location}
                </span>
              </div>
              <div>
                <div>
                  <h1 className="text-[13px] p-2 text-[#287CCD] md:text-base font-bold">
                    {item.price}
                    <span className="text-[13px] text-[#287dcd8d] md:text-base font-bold">
                      {item.duration}
                    </span>
                  </h1>
                </div>
                <div className="flex items-center justify-between ">
                  <button className="bg-[#287CCD] w-[180px] h-[40px] rounded-[5px] text-white">
                    Book Now
                  </button>
                  <button className="bg-[#111] w-[180px] h-[40px] rounded-[5px] text-white">
                    Inquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
