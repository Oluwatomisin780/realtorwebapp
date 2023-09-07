import { createContext, useState } from 'react';
import {data} from '../data/Data'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(data);

 


  return (
    <ProductContext.Provider value={{products}} >
        {children}
    </ProductContext.Provider>
  )
};

export default ProductProvider;