import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import './searchbar.css';
import { useProduct } from '../../context/ProductContext';

const CATEGORIES = [
  { name: 'Chair', color: '#00e676' },
  { name: 'Table', color: '#388e3c' },
  { name: 'Bed', color: '#91b785' },
  { name: 'Bookshelf', color: '#b2dfdb' },
  { name: 'Lamp', color: '#ffd600' },
  { name: 'Sofa', color: '#ff7043' },
];

function getRandomCategories(n = 4) {
  const shuffled = [...CATEGORIES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const SearchBar = () => {
    const { products, addToWishlist, addToCart } = useProduct();
    const [sortType, setSortType] = useState('default');
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [randomCategories, setRandomCategories] = useState(getRandomCategories());
    const [showSort, setShowSort] = useState(false);
    const [toast, setToast] = useState(null);

    // Filter by search and keywords
    const filteredProducts = products.filter(product => {
      const searchLower = search.toLowerCase();
      const inTitle = product.title.toLowerCase().includes(searchLower);
      const inKeywords = product.keywords && product.keywords.some(k => k.toLowerCase().includes(searchLower));
      const inCategory = selectedCategory ? product.category === selectedCategory : true;
      return (inTitle || inKeywords) && inCategory;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortType === 'price-asc') return a.price - b.price;
      if (sortType === 'price-desc') return b.price - a.price;
      return 0;
    });

    const handleAddToWishlist = (product) => {
      addToWishlist(product);
      setToast({ msg: 'Added to Wishlist!', type: 'wishlist' });
      setTimeout(() => setToast(null), 1200);
    };
    const handleAddToCart = (product) => {
      addToCart(product);
      setToast({ msg: 'Added to Cart!', type: 'cart' });
      setTimeout(() => setToast(null), 1200);
    };

    return (
    <div>
      <div className="searchbar-container">
          <input
              className="searchbar-input" 
              type="text" 
              placeholder="Search for products, brands and more" 
              value={search}
              onChange={e => setSearch(e.target.value)}
          />
          <button className="searchbar-btn" tabIndex={-1}>
              <SearchIcon />
          </button>
      </div>
      <div className="product-list classy-product-list grid-4">
        {sortedProducts.length === 0 ? (
          <div style={{textAlign: 'center', color: '#888', marginTop: 40, fontSize: '1.2rem'}}>No products found.</div>
        ) : (
          sortedProducts.map(product => (
            <div key={product.id} className="product-card classy-card">
              <img src={product.image} alt={product.title} className="product-img classy-img" />
              <a href={product.sourceUrl} target="_blank" rel="noopener noreferrer" className="product-title-link">
                <div className="classy-title-pic">
                  {product.category.toLowerCase() === 'chair' && (
                    <img src="https://cdn-icons-png.flaticon.com/512/4280/4280500.png" alt="chair icon" className="title-icon" />
                  )}
                  {product.title}
                </div>
              </a>
              <p className="classy-price">₹{product.price.toLocaleString()}</p>
              <div className="classy-btn-row">
                <button onClick={() => handleAddToWishlist(product)} className="wishlist-btn classy-btn">♡ Wishlist</button>
                <button onClick={() => handleAddToCart(product)} className="cart-btn classy-btn">🛒 Add to Cart</button>
              </div>
              <div className="product-source">{product.source.charAt(0).toUpperCase() + product.source.slice(1)}</div>
            </div>
          ))
        )}
      </div>
      <button className="floating-sort-btn" onClick={() => setShowSort(!showSort)}>
        <TuneIcon style={{ fontSize: 32 }} />
      </button>
      {showSort && (
        <div className="floating-sort-panel">
          <div className="floating-sort-header">Sort & Filter</div>
          <select className="sort-select" value={sortType} onChange={e => setSortType(e.target.value)}>
            <option value="default">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          <button className="close-sort-panel" onClick={() => setShowSort(false)}>Close</button>
        </div>
      )}
      {toast && (
        <div className={`toast-notification ${toast.type}`}>{toast.msg}</div>
      )}
    </div>
    );
};
export default SearchBar;