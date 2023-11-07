// app.js
import express from 'express';
import connectDB from './db';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import { getallusers } from './controllers/user-controller';

const app = express();
app.use(express.json())
app.use('/api/user',router)
app.use('/api/blog',blogRouter)

connectDB();
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
