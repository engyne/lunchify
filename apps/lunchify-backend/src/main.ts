import express, { Request, Response } from 'express';
import cors from 'cors';
import * as path from 'path';
import pool from './db';

const app = express();

const corsConfig = {origin: process.env.LUNCHIFY_CLIENT_URL};

app
  .use(cors(corsConfig))
  .use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to lunchify-backend!' });
});

app.get('/api/places', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM "Places"');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching places:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening attentively at http://localhost:${port}/api`);
});
server.on('error', console.error);

