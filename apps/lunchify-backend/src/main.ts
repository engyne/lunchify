import express from 'express';
import router from './router';
import cors from 'cors';
import * as path from 'path';
import sequelize from './db';

const app = express();

const corsConfig = {origin: process.env.LUNCHIFY_CLIENT_URL};

app
  .use(cors(corsConfig))
  .use('/assets', express.static(path.join(__dirname, 'assets')))
  .use(router);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to lunchify-backend!' });
});

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log('Error syncing database: ' + err));

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening attentively at http://localhost:${port}/api`);
});
server.on('error', console.error);

