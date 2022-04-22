import Catalog from '../../components/catalog/catalog';
import {Outlet} from 'react-router-dom';

function Home() {

  const categories = [
    {
      id: 1,
      title: 'Маски',
      imageUrl: 'https://i.ibb.co/58rtkM1/mask.jpg',
    },

    {
      id: 2,
      title: 'Костюмы',
      imageUrl: 'https://i.ibb.co/yY0g6VK/suit.jpg',
    },

    {
      id: 3,
      title: 'Обувь',
      imageUrl: 'https://i.ibb.co/CmFmQSq/shoes.jpg',
    },

    {
      id: 4,
      title: 'Дамы',
      imageUrl: 'https://i.ibb.co/jWKpSWx/women.jpg',
    },

    {
      id: 5,
      title: 'Мужчины',
      imageUrl: 'https://i.ibb.co/NsZvwJG/men.jpg',
    },

  ];

  return (
    <div>
      <Outlet/>
      <Catalog categories={categories} />
    </div>
  );
}

export default Home
