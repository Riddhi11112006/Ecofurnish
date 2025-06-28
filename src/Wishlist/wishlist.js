import React, { useState } from "react";
import "./wishlist.css";
import { useProduct } from '../context/ProductContext';

const Wishlist = () => {
  const { wishlist, addToCart } = useProduct();
  const [toast, setToast] = useState(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    setToast('Added to Cart!');
    setTimeout(() => setToast(null), 1200);
  };

  return (
    <div className="wishlist-bg">
      <div className="wishlist-card">
        <h2>Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <div className="wishlist-empty-state">
            <img
              src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
              alt="Empty Wishlist"
              className="wishlist-empty-img"
            />
            <p className="wishlist-empty-text">
              Your wishlist is empty.<br />
              Start adding eco-friendly furniture you love!
            </p>
          </div>
        ) : (
          <div className="wishlist-list">
            {wishlist.map(item => (
              <div key={item.id} className="wishlist-item">
                <img src={item.image} alt={item.title} className="wishlist-img" />
                <div>
                  <h4>{item.title}</h4>
                  <p>Rent: {item.rent}</p>
                  <button className="wishlist-add-cart-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {toast && <div className="toast-notification cart">{toast}</div>}
      </div>
    </div>
  );
};

export default Wishlist;