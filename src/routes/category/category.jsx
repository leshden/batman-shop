import {useContext, useState, useEffect, Fragment} from 'react';
import './category.scss';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {selectCategoriesMap} from '../../store/categories/category.selector';
import ProductCard from '../../components/product-card/product-card';

const Category = () => {
  const {category} = useParams();
  const products = useSelector(selectCategoriesMap);
  const [productsCategory, setProductsCategory] = useState(products[category]);

  console.log('category');
  console.log(category);

  useEffect(() => {
    setProductsCategory(products[category]);
  }, [products, category]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {
          productsCategory && productsCategory.map((product) => (
              <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </Fragment>
  )

}

export default Category;
