import React, { useRef, useState } from 'react';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import './ecobot.css';

const Ecobot = () => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGalleryClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setSuggestion('');
      setLoading(true);

      setTimeout(() => {
        setSuggestion('🌱 Based on your room, try a Scandinavian eco-sofa and a bamboo coffee table!');
        setLoading(false);
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
      </div>
    </div>
  );
};

export default Ecobot;