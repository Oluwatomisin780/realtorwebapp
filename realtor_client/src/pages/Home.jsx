import React from 'react'
// import Footer from "../components/Footer";
import Header from "../components/Header";


const Home = () => {
  return (
    <div className=" h-screen   bg-cover bg-center" style={{ backgroundImage: "url('./heroimg.jpg')" }}>
        <Header/>
        <div className="flex  justify-evenly items-center h-[500px] flex-col" >
        
        <div className='flex flex-col self-center bg-[#287dcd1c] items-center justify-center '>
              <h1 className='text-[18px]   md:text-[60px]  mt-4 text-center  text-[#fff]  font-bold '>
              We are here to make your dreams come true
              </h1>
            <span className='text-[18px] md:text-[40px] font-normal text-[#fff] self-center  '>Search for budget-friendly houses in your nearest location</span>
        </div> 
                    <button className='bg-[#287CCD] w-[120px] h-[40px] rounded-[5px] text-white'>Get Started</button>

        </div>
        
    </div>
  )
}

export default Home