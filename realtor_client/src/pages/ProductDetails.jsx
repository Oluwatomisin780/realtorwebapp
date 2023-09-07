import {useContext} from 'react';
//import params
import { useParams } from 'react-router-dom';

//import product context 
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
  //get the product id from the url
  const {id} = useParams();
  const {products} = useContext(ProductContext);
 

  //get the single product based on the id 
  const product = products.find((item) => { 
    return item.id === parseInt(id);
  })

  //if product is not found
  if (!product) {
    return<section className='h-screen flex justify-center items-center'> Loading...</section>
  }

  //destructure product 
  const{title, price, description, image } = product;

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className="container mx-auto">
        {/*image & text wrapper*/}
        <div className=' items-center'>
             {/*image*/}
            <div className='flex flex-1 justify-center items-center mb-8
            lg:mb-0 '>
              <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
            </div>
            
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
