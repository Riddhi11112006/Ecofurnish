import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/navbar';
import SearchBar from './Screen/SearchBar/searchbar';
import {useLocation,Routes,Route} from 'react-router-dom';
import Ecobot from './Ecobot/ecobot';
import Wishlist from './Wishlist/wishlist';
import { useAuth } from './context/AuthContext';
import AuthModal from "./component/AuthModal/AuthModal";
import Cart from './Cart/cart';
import Rent from './Rent';
import RentOutForm from './RentOutForm';
import Account from './Account/account'; // Add this import


function App() {
  const { showAuthModal } = useAuth();
  const location = useLocation();
  return (
    <div className="App">
      <Navbar/>
      <hr style={{ border:'1px solid #222', margin: '0' }} />
      {showAuthModal && <AuthModal />}
      <Routes>
        <Route path="/ecobot" element={<Ecobot />} />
        <Route path="/" element={<SearchBar />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/account" element={<Account />} /> {/* Add this route */}
      </Routes>
    </div>
  );
}

export default App;