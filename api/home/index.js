import express from 'express';
import { path } from '../constants/const.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path);
});
  
export default router;