/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { CLIENT_URL, PORT } = process.env;

const app = express();

app
  .use(cors({ origin: CLIENT_URL }))
  .use(express.json())
  .use('/', (req, res) => {
    res.send('product catalog server');
  });

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
