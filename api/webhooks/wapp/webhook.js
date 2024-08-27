import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const { VERIFY_TOKEN } = process.env;

router.get('/wapp-webhook', (req, res) => {
  const { 'hub.mode': mode, 'hub.verify_token': token, 'hub.challenge': challenge } = req.query;
  
  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.status(403).send('Forbidden');
  }
});

export default router;