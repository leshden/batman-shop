import Home from './routes/home/home';
import {Routes, Route} from 'react-router-dom';
import Menu from './routes/menu/menu';

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
        </Route>
      </Routes>
    );
}

export default App;
