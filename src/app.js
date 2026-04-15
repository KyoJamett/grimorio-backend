import express from 'express';
import cors from 'cors';
import editionsRouter from './routes/editions.js';
import cardsRouter from './routes/cards.js'
import formatsRouter from './routes/formats.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', editionsRouter);
app.use('/api', cardsRouter);
app.use('/api', formatsRouter);
app.use('/docs', express.static('public/docs'));

export default app;