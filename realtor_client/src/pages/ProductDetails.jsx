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
  const { title, price, description, image,image2,image3,image4,image5,image6,image7,image8,image9 } = product;
  
  

  return (
    <section className=''>
      <Header />
      <div className="container mx-auto   flex items-center">
        {/*image & text wrapper*/}
             {/*image*/}
           
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
                    <img src={image} width={400} height={400}  alt='slide image' className='rounded-[5px] h-[260px] max-w-[200px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image2} width={400} height={400}  alt='slide image' className='rounded-[5px] h-[260px] max-w-[200px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                    <img src={image3} width={400} height={400}  alt='slide image' className='rounded-[5px] h-[260px] max-w-[200px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image4} width={400} height={400}  alt='slide image' className='rounded-[5px] h-[260px] max-w-[200px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image5} width={400} height={400}  alt='slide image' className='rounded-[5px] h-[260px] max-w-[200px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image6} width={400} height={400}  alt='slide image' className='rounded-[5px] h-[260px] max-w-[200px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image7} width={400} height={400}  alt='slide image' className='rounded-[5px] h-[260px] max-w-[200px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image8} width={400} height={400}  alt='slide image' className='rounded-[5px] h-[260px] max-w-[200px] lg:max-w-2xl'  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={image9} width={400} height={400}  alt='slide image' className='rounded-[5px] h-[260px] max-w-[200px] lg:max-w-2xl'  />
                  </SwiperSlide>
                                      
        </Swiper>
        <div>
 
        </div>
          </div>

        
      
    </section>
  )
}

export default ProductDetails
