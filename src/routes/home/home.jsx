import Catalog from '../../components/catalog/catalog';
import {Outlet} from 'react-router-dom';

function Home() {
  return (
    <div>
      <Outlet />
      <Catalog />
    </div>
  );
}

export default Home
