import express from 'express';
import path from 'path';
import { convertPhoneNumber } from '../constants/const.js';
import sendWappMsg from '../webhooks/wapp/sendMessage.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', 
    { 
      root: path.join(__dirname, '../../public/temp') 
    }
  );
});

router.post('/sendWifiPassword', (req, res) => {
  const { name, email, wapp, dob } = req.body;
  const contact = [];
  
  if (wapp !== '') {
    const formattedNumber = convertPhoneNumber(wapp);
    contact.push(formattedNumber);

    sendWappMsg(contact, 'Wifi Password');
    res.status(200).send('Message Sent')
  }
});

export default router;