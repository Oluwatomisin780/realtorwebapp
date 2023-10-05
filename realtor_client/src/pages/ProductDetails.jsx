import { useContext } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import params
import { useParams } from 'react-router-dom';
//import product context 
import { ProductContext } from '../context/ProductContext';
import Header from '../components/Header';


const ProductDetails = () => {
  //get the product id from the url
  const {id} = useParams();
  const { products } = useContext(ProductContext);
  


  //get the single product based on the id 
  const product = products.find((item) => { 
    return item.id === parseInt(id);
  })

  //if product is not found
  if (!product) {
    return<section className='h-screen flex justify-center items-center'> Loading...</section>
  }

  //destructure product 
  const { name, location, bed, bath,landSize,  image,image2,image3,image4,image5,image6,image7,image8,image9 } = product;
  
  

  return (
    <section className='flex flex-col'>
      <div>
        <Header />
      </div>
      
      <div >
        <h1 className='pl-10 text-2xl'><span className=' font-bold'>{name}</span> </h1>
        {/*image & text wrapper*/}
        {/*image*/}
        <div className="container mx-auto   flex items-center">
          <Swiper className='flex mt-5 justify-evenly items-center'
                   style={{
                    "--swiper-navigation-color":"black",
                    "--swiper-navigation-size":"3.3rem"
                }}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                   
                  },
                  // when window width is >= 480px  
                  480: {
                    slidesPerView: 1,
                    
                  },
                  768: {
                    slidesPerView: 3,
                    
                  },
                  1024: {
                    slidesPerView: 3,
                    
                  },
                }}
                autoplay={{
                    delay:3000,
                    disableOnInteraction:false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                >
                  <SwiperSlide>
                    <img src={image} width={400} height={400}  alt='slide' className='rounded-[5px] h-[260px] max-w-[350px] w-[422px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image2} width={400} height={400}  alt='slide' className='rounded-[5px] h-[260px] max-w-[350px] w-[422px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <img src={image3} width={400} height={400}  alt='slide' className='rounded-[5px] h-[260px] max-w-[350px] w-[422px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image4} width={400} height={400}  alt='slide' className='rounded-[5px] h-[260px] max-w-[350px] w-[422px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image5} width={400} height={400}  alt='slide' className='rounded-[5px] h-[260px] max-w-[350px] w-[422px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image6} width={400} height={400}  alt='slide' className='rounded-[5px] h-[260px] max-w-[350px] w-[422px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image7} width={400} height={400}  alt='slide' className='rounded-[5px] h-[260px] max-w-[350px] w-[422px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image8} width={400} height={400}  alt='slide' className='rounded-[5px] h-[260px] max-w-[350px] w-[422px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide >
                    <img src={image9} width={400} height={400}  alt='slide' className='rounded-[5px] h-[260px] max-w-[350px] w-[422px] lg:max-w-2xl'  />
                  </SwiperSlide>
                                      
        </Swiper>
        </div>
           
          
        <div className='flex px-10 '>
          <div className='flex flex-col flex-1'>
            <h1 className='py-10 text-xl'>Information about <span className=' font-bold'>{name}</span> </h1>
            <p>
              <span className=' font-bold'>{name}</span> 
              is known for its professional and helpful staff who offer prompt service
              and quick response to requests at any time of the day.
              This hotel is at {location}, Off Ahmadu Bello Way,
              in proximity to beaches and night clubs with approximately {landSize} landsize.
              <br />
              <br />
              <span className=' font-bold'>{name}</span> 
              has its own night club too.Couples can visit the hotel for romantic getaways.
              No matter the category of rooms that guests are lodged in, The {name}
              ensures that guests have the perfect stay. The room categories fall into
              Classic, Deluxe, Executive Room, Deluxe Executive, Suite and Royal Suite.
              <br />
              <br />
              An en- suite bathroom with a shower, bathrobes and a hairdryer are fitted in the rooms. It has {bed}
              The TV comes with cable channels.A sitting area is also provided in the rooms for entertaining visitors.
              Views from the rooms are fascinating as you can enjoy a city and ocean view from the rooms.
              King - sized beds with clean and comfortable beddings with {bath} are provided in the rooms.
              <br />
              <br />
              The <span className=' font-bold'>{name}</span>  provides facilities that would help guests have an exciting experience.
              A fully equipped fitness centre is at the hotel. It features a night club where guests get to have loads of fun and engage in karaoke sessions.
              Other facilities include free Wi-Fi access, a swimming pool, a restaurant, a bar and meeting halls.
              <span className=' font-bold'>{name}</span> 
              renders concierge, laundry/dry cleaning, car hire, airport shuttle, ironing and a 24-hour room service.
              The premises are guarded by security personnel and a constant power supply is provided at The {name}.'

            </p>
          </div>
          <div className='flex py-10 pl-10 flex-1'>
            
              <div class="container justify-center   flex">
                <div class=" md:w-[400px] bg-white rounded-lg p-8 flex flex-col  mt-10  relative z-10 shadow-md">
                  <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                  <p class="leading-relaxed mb-5 text-gray-600">Frequentluy asked questions about <span className=' font-bold'>{name}</span></p>
                  <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                  <div class="relative mb-4">
                    <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                  <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                  <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
              </div>
          </div>
        </div>
      </div>

        
      
    </section>
  )
}

export default ProductDetails
