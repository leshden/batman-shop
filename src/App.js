import './categories.styles.scss';
import CategoryItem from './components/category-item/component';

function App() {

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
    <div className='categories-container'>
      {categories.map((category)=>(
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default App;
