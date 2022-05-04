import './catalog.scss';
import CatalogItem from '../catalog-item/catalog-item';

const Catalog = ({categories}) => {
  return (
    <div className='categories-container'>
      {categories.map((category)=>(
        <CatalogItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Catalog
