import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Mensmultiple from './component/Men/Mensmultiple'; 
import MensSection from './component/Men/MensSection';
import Profile from './component/Profile/Profile';
import Cart from './component/cart/Cart';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/menssection" element={<MensSection />} />
        <Route exact path="/mensmultiple" element={<Mensmultiple />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
