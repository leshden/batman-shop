import './catalog.scss';
import CatalogItem from '../catalog-item/catalog-item';

const categories = [
  {
    id: 1,
    title: 'Маски',
    imageUrl: 'https://i.ibb.co/58rtkM1/mask.jpg',
    route: 'shop/маски',
  },

  {
    id: 2,
    title: 'Костюмы',
    imageUrl: 'https://i.ibb.co/yY0g6VK/suit.jpg',
    route: 'shop/костюмы',
  },

  {
    id: 3,
    title: 'Обувь',
    imageUrl: 'https://i.ibb.co/CmFmQSq/shoes.jpg',
    route: 'shop/обувь',
  },

  {
    id: 4,
    title: 'Дамы',
    imageUrl: 'https://i.ibb.co/jWKpSWx/women.jpg',
    route: 'shop/дамы',
  },

  {
    id: 5,
    title: 'Мужчины',
    imageUrl: 'https://i.ibb.co/NsZvwJG/men.jpg',
    route: 'shop/мужчины',
  },

];

const Catalog = () => {

  return (
    <div className='categories-container'>
      {categories.map((category)=>(
        <CatalogItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Catalog
