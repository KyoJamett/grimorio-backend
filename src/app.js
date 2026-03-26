import express from 'express';
import cors from 'cors';
import editionsRouter from './routes/editions.js';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api', editionsRouter);

export default app;