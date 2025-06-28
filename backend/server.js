const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const upload = multer();

app.use(cors());
app.use(express.json());

app.post('/api/analyze-room', upload.single('image'), (req, res) => {
  // For now, just return a mock suggestion
  res.json({
    suggestion: "🌱 Based on your room, try a Scandinavian eco-sofa and a bamboo coffee table!"
  });
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
