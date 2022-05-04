import {useContext, useState, useEffect, Fragment} from 'react';
import './category.scss';
import {useParams} from 'react-router-dom';
import {ProductsContext} from '../../contexts/products';
import ProductCard from '../../components/product-card/product-card';

const Category = () => {
  const {category} = useParams();
  const {products} = useContext(ProductsContext);
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
