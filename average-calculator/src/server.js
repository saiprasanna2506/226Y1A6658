require('dotenv').config();
const express = require('express');
const averageRoutes = require('./routes/averageRoutes');

const app = express();
app.use(express.json());
app.use('/numbers', averageRoutes);

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
