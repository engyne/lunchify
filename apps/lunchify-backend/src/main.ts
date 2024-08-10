import express from 'express';
import cors from 'cors';
import * as path from 'path';

const app = express();

const corsConfig = {origin: 'http://localhost:4200'};

app
  .use(cors(corsConfig))
  .use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to lunchify-backend!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening attentively at http://localhost:${port}/api`);
});
server.on('error', console.error);

