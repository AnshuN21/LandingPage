const express = require('express'); 
const cors = require('cors');
const mongoose = require('mongoose'); 
const projectRoutes = require('./routes/projects'); 
const happyClientsRoute = require("./routes/happyClients");
require('dotenv').config(); 

const app = express(); 


app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


mongoose
  .connect(process.env.MONGO_URI, )
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api/projects', projectRoutes); 
app.use("/api/happyclients", happyClientsRoute);


const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
