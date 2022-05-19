import {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {selectCategoriesMap} from '../../store/categories/category.selector';
import CategoryPreview from '../../components/category-preview/category-preview';

function CategoriesPreview() {
  const products = useSelector(selectCategoriesMap);
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
