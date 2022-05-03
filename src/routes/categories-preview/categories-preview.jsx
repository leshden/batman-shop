import {useContext, Fragment} from 'react';
import {ProductsContext} from '../../contexts/products';
import CategoryPreview from '../../components/category-preview/category-preview';

function CategoriesPreview() {
  const {products} = useContext(ProductsContext);
  const keys = Object.keys(products);

  return (
    <Fragment>
      {keys.map((title)=>{
          const productsShop = products[title];
          return(
             <CategoryPreview key={title} title={title} products={productsShop} />
          );
      })}
    </Fragment>
  );
}

export default CategoriesPreview;
