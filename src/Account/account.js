import React, { useState, useEffect } from "react";
import "./account.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const initialOrders = [
  { id: "ORD12345", date: "2025-06-15", status: "Delivered", total: "$120.00" },
  { id: "ORD12346", date: "2025-06-10", status: "Shipped", total: "$89.99" }
];

const initialAddresses = [
  { id: 1, label: "Home", address: "123 Green St, Eco City, 12345" },
  { id: 2, label: "Office", address: "456 Work Ave, Biztown, 67890" }
];

const Account = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [editProfile, setEditProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({ name: "", email: "" });
  const [orders] = useState(initialOrders);
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressForm, setAddressForm] = useState({ label: "", address: "" });

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    setProfile({
      name: user.name,
      email: user.email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=43e97b&color=fff&size=128`
    });
    setProfileForm({ name: user.name, email: user.email });
  }, [user, navigate]);

  if (!user || !profile) return null;

  // Profile handlers
  const handleProfileChange = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };
  const handleProfileSave = (e) => {
    e.preventDefault();
    setProfile({ ...profile, ...profileForm });
    setEditProfile(false);
  };

  // Address handlers
  const handleAddressChange = (e) => {
    setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
  };
  const handleAddAddress = (e) => {
    e.preventDefault();
    if (addressForm.label && addressForm.address) {
      setAddresses([
        ...addresses,
        { ...addressForm, id: Date.now() }
      ]);
      setAddressForm({ label: "", address: "" });
      setShowAddressForm(false);
    }
  };
  const handleRemoveAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div className="account-bg">
      <div className="account-card pro-account">
        {/* Profile Section */}
        <div className="profile-section">
          <img src={profile.avatar} alt="avatar" className="profile-avatar" />
          {editProfile ? (
            <form className="profile-form" onSubmit={handleProfileSave}>
              <input
                type="text"
                name="name"
                value={profileForm.name}
                onChange={handleProfileChange}
                required
              />
              <input
                type="email"
                name="email"
                value={profileForm.email}
                onChange={handleProfileChange}
                required
              />
              <button type="submit" className="profile-save-btn">Save</button>
              <button type="button" className="profile-cancel-btn" onClick={() => setEditProfile(false)}>Cancel</button>
            </form>
          ) : (
            <div className="profile-info">
              <h2>{profile.name}</h2>
              <p>{profile.email}</p>
              <button className="profile-edit-btn" onClick={() => setEditProfile(true)}>Edit Profile</button>
            </div>
          )}
        </div>
        {/* Orders Section */}
        <div className="orders-section">
          <h3>My Orders</h3>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Addresses Section */}
        <div className="addresses-section">
          <h3>Saved Addresses</h3>
          <ul className="addresses-list">
            {addresses.map(addr => (
              <li key={addr.id}>
                <span className="address-label">{addr.label}:</span> {addr.address}
                <button className="remove-address-btn" onClick={() => handleRemoveAddress(addr.id)}>Remove</button>
              </li>
            ))}
          </ul>
          {showAddressForm ? (
            <form className="add-address-form" onSubmit={handleAddAddress}>
              <input
                type="text"
                name="label"
                placeholder="Label (e.g. Home, Office)"
                value={addressForm.label}
                onChange={handleAddressChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={addressForm.address}
                onChange={handleAddressChange}
                required
              />
              <button type="submit" className="address-save-btn">Add</button>
              <button type="button" className="address-cancel-btn" onClick={() => setShowAddressForm(false)}>Cancel</button>
            </form>
          ) : (
            <button className="add-address-btn" onClick={() => setShowAddressForm(true)}>Add Address</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;