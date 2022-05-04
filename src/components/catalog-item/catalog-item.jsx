import './catalog-item.scss';

const CatalogItem = ({category}) => {
  const {imageUrl, title} = category;
  return(
    <div className='catalog-item-container'>
      <div className='background-image'
       style={{
        backgroundImage: `url(${imageUrl})`,
      }} />
      <div className='catalog-item-body'>
        <h2>{title}</h2>
        <p>Купить</p>
      </div>
    </div>
  );
}

export default CatalogItem;
