import React, { useRef, useState } from 'react';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import './ecobot.css';
import { useProduct } from '../context/ProductContext';

const Ecobot = () => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [suggestion, setSuggestion] = useState('');
  const [detected, setDetected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const { products, addToWishlist, addToCart } = useProduct();

  const handleGalleryClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setSuggestion('');
      setDetected([]);
      setLoading(true);
      setTimeout(() => {
        // Simulate detection by file name
        let detectedItems = [];
        if (file.name.toLowerCase().includes('bed')) detectedItems.push('Bed');
        if (file.name.toLowerCase().includes('sofa')) detectedItems.push('Sofa');
        if (file.name.toLowerCase().includes('table')) detectedItems.push('Table');
        if (file.name.toLowerCase().includes('chair')) detectedItems.push('Chair');
        if (file.name.toLowerCase().includes('lamp')) detectedItems.push('Lamp');
        if (file.name.toLowerCase().includes('bookshelf')) detectedItems.push('Bookshelf');
        if (detectedItems.length === 0) detectedItems = ['Sofa', 'Table'];
        setDetected(detectedItems);
        // Suggest products from available list
        const suggestions = products.filter(p => detectedItems.includes(p.category));
        setSuggestion(
          suggestions.length > 0
            ? ''
            : '🌱 No matching eco-friendly furniture found for your room.'
        );
        setLoading(false);
        setDetected(detectedItems);
        setSuggestedProducts(suggestions);
      }, 1800);
    }
  };

  return (
    <div className="ecobot-bg">
      <div className="ecobot-card">
        <div className="ecobot-header">
          <h1>Room Analysis AI</h1>
          <p className="ecobot-subtitle">Upload your room photo and get smart, eco-friendly furniture suggestions!</p>
        </div>
        <div className="ecobot-upload-area" onClick={handleGalleryClick}>
          {image ? (
            <img src={image} alt="Uploaded" className="ecobot-uploaded-img" />
          ) : (
            <div className="ecobot-upload-placeholder">
              <InsertPhotoIcon className="ecobot-upload-icon" />
              <span>Click or drag a room image here</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
        {loading && <div className="ecobot-suggestion loading">Analyzing your room...</div>}
        {suggestion && !loading && (
          <div className="ecobot-suggestion">{suggestion}</div>
        )}
        {image && detected.length > 0 && !loading && (
          <div className="ecobot-detected">
            <b>Detected room needs:</b> {detected.join(', ')}
          </div>
        )}
        {image && suggestedProducts.length > 0 && !loading && (
          <div className="ecobot-suggested-products">
            <b>Suggested Products:</b>
            <div className="ecobot-product-tiles">
              {suggestedProducts.map(product => (
                <div key={product.id} className="ecobot-product-tile">
                  <img src={product.image} alt={product.title} className="ecobot-product-img" />
                  <div className="ecobot-product-title">{product.title}</div>
                  <div className="ecobot-product-price">₹{product.price.toLocaleString()} <span>({product.rent})</span></div>
                  <div className="ecobot-product-actions">
                    <button onClick={() => addToWishlist(product)} className="wishlist-btn">♡ Wishlist</button>
                    <button onClick={() => addToCart(product)} className="cart-btn">🛒 Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ecobot;