import {createContext, useState, useEffect} from 'react';
import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: {}
});

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState({});

  useEffect(()=>{
    const categoryMap = SHOP_DATA.reduce((acc, item) => {
      const {title, items} = item;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    setProducts(categoryMap);

  }, []);

  const value = {products};
  return(
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
}
