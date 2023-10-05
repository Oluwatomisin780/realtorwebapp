import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Links = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Properties',
    link: '/properties',
  },
  {
    id: 3,
    title: 'About Us',
    link: '/about',
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <nav className="h-[100px] flex p-10  justify-between items-center ">
      <Link to="/">
       <h1 className=" text-[#287CCD] font-bold text-[25px]">BrownTom</h1>
      </Link>
      <div>
         <FaBars
        onClick={toggleNav}
        className={` ${
          open ? '' : ''
        } md:hidden h-[30px] w-[40px]  ml-[180px] cursor-pointer`}
      />
      </div>
     

      <div className={`hidden md:flex md:items-center md:gap-[20px]`}>
        {Links.map(({ link, title, id }) => (
          <Link
            key={id}
            to={link}
            className={`${
              location.pathname === link ? 'border-[#287CCD] border-b-4' : ''
            } w-[90px] h-[35px] p-1 flex flex-col md:flex-row items-center justify-center`}
          >
            {title}
          </Link>
        ))}
      </div>

      <div
        className={`absolute right-[5px] top-[68px] md:hidden flex flex-col items-center text-white gap-[10px] bg-[#287CCD] w-[200px]  rounded-[10px] `}
      >
        {open &&
          Links.map(({ link, title, id }) => (
            <Link
              key={id}
              to={link}
              onClick={() => setOpen(!open)}
              className={`${
                location.pathname === link ? 'border-[#111] border-b-4' : ''
              } w-[90px] h-[35px] p-1 flex flex-col md:flex-row items-center justify-center`}
            >
              {title}
             
            </Link>
           
           
          ))}
        {   open && 
            <button  className="bg-[#fff] mb-2 flex md:hidden w-[90px] items-center justify-center h-[30px] rounded-[5px] text-[#287CCD]">
            Login
            </button>
        }
       
      </div>
      <div className="">
        <Link to="/login">
          <button className="bg-[#287CCD] hidden md:flex w-[90px] items-center justify-center h-[40px] rounded-[5px] text-white">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
