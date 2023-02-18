import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Beranda from './components/Beranda';
import KatalogProduct from './components/KatalogProduct';
import ManajemenLaptop from './components/ManajemenLaptop';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Beranda />} />

          <Route path="/manajemen-product" exact element={<ManajemenLaptop />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/katalog-product" exact element={<KatalogProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
