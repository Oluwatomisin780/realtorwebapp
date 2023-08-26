import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroImg from '../img/heroimg.png'

const Home = () => {
  return (
    <div className='bg-gradient-to-bl from-[rgb(220,240,255)] via-[#fff] to-[rgb(220,240,255)]'>
        <Header/>
        <div className='flex flex-col md:flex-row  items-center gap-[100px] '>
        <div className='flex-1 pl-10 flex flex-col  items-center md:items-start gap-[10px]'>
          <div className=''>
              <h1 className='text-[18px]  md:text-[40px] md:top-[90px] md:w-[460px] mt-4 text-center md:text-left text-[#000] md:absolute font-bold '>
              We are here to make your dream come true
              </h1>
            <p className='text-[18px] font-normal text-[#444] md:absolute md:top-[240px] md:w-[400px] '>Search for wonderful, budget-friendly houses in your nearest location and rent</p>
          </div>
          <button className='bg-[#287CCD] w-[120px] h-[40px] rounded-[5px] text-white'>Get Started</button>

        </div>
        <div className=' '>
            <img  src={HeroImg} alt='hero image' className='object-cover w-[300px] h-[300px] md:h-full md:w-[900px]'  />
        </div>
    
          </div>
        <Footer/>
    </div>
  )
}

export default Home