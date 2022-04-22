import './catalog.scss';
import CategoryItem from '../category-item/category-item';

const Catalog = ({categories}) => {
  return (
    <div className='categories-container'>
      {categories.map((category)=>(
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Catalog
