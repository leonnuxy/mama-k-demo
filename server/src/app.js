require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors(), express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("🗄️  Connected to MongoDB"))
  .catch(err => console.error("❌  MongoDB connection error:", err));

// Simple health check
app.get('/api/health', (req, res) => res.send({ status: 'OK' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀  API listening on port ${PORT}`));
