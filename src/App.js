import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavbarSection } from './components/Navbar';
import { Products } from './components/Products';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
