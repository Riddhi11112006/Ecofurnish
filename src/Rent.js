import React, { useState } from "react";
import { useProduct } from './context/ProductContext';
import RentOutForm from './RentOutForm';

const initialListings = [
  {
    id: 1,
    name: 'Sheesham Wood Bed',
    city: 'Delhi',
    price: '₹2,000/month',
    condition: 'Good',
    contact: 'owner@email.com',
    availableFrom: '2025-07-01',
    availableTo: '2025-08-01',
    imgPreview: 'https://m.media-amazon.com/images/I/61bIH2IZfUL._SX425_.jpg',
    status: 'Available'
  }
];

const Rent = () => {
  const { products } = useProduct();
  const [showForm, setShowForm] = useState(false);
  const [listings, setListings] = useState(initialListings);
  const [requestId, setRequestId] = useState(null);

  const handleAddListing = (listing) => {
    setListings([...listings, { ...listing, id: Date.now(), status: 'Available' }]);
  };
  const handleRequest = (id) => {
    setListings(listings.map(l => l.id === id ? { ...l, status: 'Pending' } : l));
    setRequestId(id);
    setTimeout(() => setRequestId(null), 1200);
  };
  const handleCancel = (id) => {
    setListings(listings.map(l => l.id === id ? { ...l, status: 'Available' } : l));
  };

  return (
    <div className="rent-bg">
      <div className="rent-card">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
          <h2>Products for Rent</h2>
          <button className="rent-out-btn" onClick={() => setShowForm(true)}>Rent Out Furniture</button>
        </div>
        <div className="rent-list">
          {listings.map(listing => (
            <div key={listing.id} className="rent-item">
              <img src={listing.imgPreview} alt={listing.name} className="rent-img" />
              <div>
                <h4>{listing.name}</h4>
                <p>City: {listing.city}</p>
                <p>Condition: {listing.condition}</p>
                <p>Price: {listing.price}</p>
                <p>Available: {listing.availableFrom} to {listing.availableTo}</p>
                <button className="rent-request-btn" disabled={listing.status !== 'Available'} onClick={() => handleRequest(listing.id)}>
                  {listing.status === 'Available' ? 'Request to Rent' : listing.status}
                </button>
                {listing.status === 'Pending' && (
                  <button className="cancel-rent-btn" onClick={() => handleCancel(listing.id)} style={{marginLeft:'10px'}}>Cancel Rent</button>
                )}
                {requestId === listing.id && <span className="rent-toast">Request Sent!</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
      {showForm && <RentOutForm onSubmit={handleAddListing} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Rent;
