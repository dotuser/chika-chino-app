import express from 'express';
import path from 'path';
// import { path } from '../constants/const.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../../public/temp') });
});

export default router;