import React from "react";
import './RentalsGrid.css';

const RentalsGrid = ({ listings, onRequest }) => {
  return (
    <div className="rentals-grid">
      {listings.length === 0 ? (
        <div className="rentals-empty">No rentals available.</div>
      ) : (
        listings.map(item => (
          <div key={item.id} className="rental-card">
            {item.imgPreview && <img src={item.imgPreview} alt={item.name} className="rental-img" />}
            <div className="rental-info">
              <h4>{item.name}</h4>
              <p>Condition: {item.condition || 'N/A'}</p>
              <p>City: {item.city}</p>
              <p>Price: ₹{item.price}/month</p>
              <p>Available: {item.dates || 'Flexible'}</p>
              <p>Status: <span className={`rental-status ${item.status.toLowerCase()}`}>{item.status}</span></p>
              <button className="rental-request-btn" onClick={() => onRequest(item)} disabled={item.status !== 'Available'}>
                {item.status === 'Available' ? 'Request to Rent' : item.status}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RentalsGrid;
