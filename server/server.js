// server/server.js
require('dotenv').config({ path: __dirname + '/.env' }); // ✅ s'assure que le fichier est bien trouvé

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

console.log("MONGO_URI = ", process.env.MONGO_URI); // pour test

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log("Server running on port", PORT));
