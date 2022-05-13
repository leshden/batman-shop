import {BackgroundImage, Body, CatalogItemContainer} from './catalog-item.styles';
import {useNavigate} from 'react-router-dom';

const CatalogItem = ({category}) => {
  const {imageUrl, title, route} = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return(
    <CatalogItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Купить</p>
      </Body>
    </CatalogItemContainer>
  );
}

export default CatalogItem;
