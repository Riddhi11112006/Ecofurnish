import React, { useState } from "react";
import './RentOutForm.css';

const initialForm = {
  image: '',
  name: '',
  condition: '',
  city: '',
  price: '',
  contact: '',
  dates: '',
};

const RentOutForm = ({ onSubmit, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [imgPreview, setImgPreview] = useState('');

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image' && files[0]) {
      setForm(f => ({ ...f, image: files[0] }));
      setImgPreview(URL.createObjectURL(files[0]));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.city || !form.price || !form.contact) return;
    onSubmit({ ...form, id: Date.now(), status: 'Available', imgPreview });
    setForm(initialForm);
    setImgPreview('');
    onClose();
  };

  return (
    <div className="rentout-modal-bg">
      <div className="rentout-modal">
        <button className="rentout-close" onClick={onClose}>×</button>
        <h2>Rent Out Furniture</h2>
        <form className="rentout-form" onSubmit={handleSubmit}>
          <label>Photo: <input type="file" name="image" accept="image/*" onChange={handleChange} /></label>
          {imgPreview && <img src={imgPreview} alt="preview" className="rentout-img-preview" />}
          <label>Name: <input name="name" value={form.name} onChange={handleChange} required /></label>
          <label>Condition: <input name="condition" value={form.condition} onChange={handleChange} /></label>
          <label>City: <input name="city" value={form.city} onChange={handleChange} required /></label>
          <label>Rental Price (per month): <input name="price" value={form.price} onChange={handleChange} required /></label>
          <label>Contact Info: <input name="contact" value={form.contact} onChange={handleChange} required /></label>
          <label>Availability Dates: <input name="dates" value={form.dates} onChange={handleChange} /></label>
          <button type="submit" className="rentout-submit">List Item</button>
        </form>
      </div>
    </div>
  );
};

export default RentOutForm;
