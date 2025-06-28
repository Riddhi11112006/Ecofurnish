import React, { useState } from "react";
import "./cart.css";
import { useProduct } from '../context/ProductContext';

const Cart = () => {
  const { cart } = useProduct();
  const [toast, setToast] = useState(null);
  // Calculate total rent (extract number from rent string)
  const totalRent = cart.reduce((sum, item) => {
    const rentNum = parseInt((item.rent || '').replace(/[^\d]/g, '')) || 0;
    return sum + rentNum;
  }, 0);

  const handleBuyNow = () => {
    setToast('Thank you for your order! (Demo only)');
    setTimeout(() => setToast(null), 1500);
  };

  return (
    <div className="cart-bg">
      <div className="cart-card">
        <h2>Your Cart <span className="cart-count">({cart.length})</span></h2>
        {cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-list">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-img" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>Rent: {item.rent}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-total-row">
                <span>Total Rent:</span>
                <span className="cart-total">₹{totalRent.toLocaleString()}/month</span>
              </div>
              <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
            </div>
          </>
        )}
        {toast && <div className="toast-notification cart">{toast}</div>}
      </div>
    </div>
  );
};

export default Cart;