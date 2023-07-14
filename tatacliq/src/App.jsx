import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home'; 
import MensSection from './component/Men/MensSection';
import Profile from './component/Profile/Profile';
import Cart from './component/cart/Cart';
import Footer from './component/Footer/Footer';
import Men from './component/Men/Men';
import Women from './component/Women/Women';
import Kids from './component/kids/Kids';
import Women_single from './component/Women/Women_single';
import HomeAndKitchen from './component/HomeandKitchen/HomeAndKitchen';
import Beauty from './component/Beauty/Beauty';
import Jewellery from './component/Jewellery/Jewellery';
import Payment from './component/cart/Payment';
import Wishlist from './component/cart/Wishlist';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/menssection" element={<MensSection />} />
        
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/men" element={<Men/>}/>
        <Route exact path="/women" element={<Women/>}/>
        <Route exact path="/kids" element={<Kids/>}/>
        <Route exact path="hk" element={<HomeAndKitchen/>}/>
        <Route exact path='/women_single' element={<Women_single/>}/>
        <Route exact path="/beauty" element={<Beauty/>}/>
        <Route exact path="/jewel" element={<Jewellery/>}/>
        <Route exact path="/payment" element={<Payment/>}/>
        <Route exact path="/wish" element={<Wishlist/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
