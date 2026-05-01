import express from 'express';
import route from './route.js';
import dotenv from 'dotenv';

dotenv.config();
console.log("DB URL:", process.env.DATABASE_URL);
const app = express();
app.use(express.json());
app.use('/api/v1',route);

app.listen(3001);