import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './config/database.js';
import errorHandler from './middlewares/errorHandler.js';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';

dotenv.config();;

const app = express();
const PORT = process.env.PORT || 5432;
app.use(express.json());

// Global error handler
app.use(errorHandler);

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

(async () => {
    await connectToDB(); // Call the function to connect to the DB
  
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
})();