import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/navbar';
import SearchBar from './Screen/SearchBar/searchbar';
import {useLocation,Routes,Route} from 'react-router-dom';
import Ecobot from './Ecobot/ecobot';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar/>
      <hr style={{ border:'1px solid #222', margin: '0' }} />
      <Routes>
        <Route path="/ecobot" element={<Ecobot />} />
        <Route path="/" element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;