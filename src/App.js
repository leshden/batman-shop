import Home from './routes/home/home';
import {Routes, Route, Outlet} from 'react-router-dom';

function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      <Outlet />
    </div>
  );
}

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
