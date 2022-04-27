import Home from './routes/home/home';
import {Routes, Route} from 'react-router-dom';
import Menu from './routes/menu/menu';
import Autorisation from './routes/autorisation/autorisation';

const Shop = () => {
  return(
    <h1>Shop page</h1>
  );
}

function App() {
    return(
      <Routes>
        <Route path='/' element={<Menu />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<Autorisation />} />
        </Route>
      </Routes>
    );
}

export default App;
