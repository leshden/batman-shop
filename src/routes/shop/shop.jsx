import {Routes, Route} from 'react-router-dom';
import './shop.scss';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import {setCategoriesMap} from '../../store/categories/category.action';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import SHOP_DATA from '../../shop-data.js';

function Shop() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const categoryMap = SHOP_DATA.reduce((acc, item) => {
      const {title, items} = item;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    dispatch(setCategoriesMap(categoryMap));
    //setProducts(categoryMap);

  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}

export default Shop;
