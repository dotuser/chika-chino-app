import express from 'express';
import { path } from '../constants/const.js';

const router = express.Router();

router.get('/admin', (req, res) => {
  res.sendFile(path, '/admin');
});
  
export default router;