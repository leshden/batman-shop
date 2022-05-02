import {useContext, Fragment} from 'react';
import {ProductsContext} from '../../contexts/products';
import ProductCard from '../../components/product-card/product-card';
import './shop.scss';

function Shop() {
  const {products} = useContext(ProductsContext);
  const keys = Object.keys(products);

  return (
    <Fragment>
    {keys.map((title)=>{
        return(<Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {products[title].map((product)=>{
              return <ProductCard key={product.id} product={product} />
            })}
          </div>
        </Fragment>)
      })}
    </Fragment>
  );
}

export default Shop;
