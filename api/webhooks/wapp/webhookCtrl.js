import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const { GRAPH_API_VERSION, WAPP_PHONE_NUMBER_ID, WAPP_ACCESS_TOKEN } = process.env;

router.post('/wapp-webhook', async (req, res) => {
  const message = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
  const question = message?.text?.body;
  
  if (message && message.from && question) {
    const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${WAPP_PHONE_NUMBER_ID}/messages?access_token=${WAPP_ACCESS_TOKEN}`;
    const payload = {
      messaging_product: 'whatsapp',
      to: message.from,
      text: { body: question },
      context: { message_id: message.id },
    };
    
    const msgSeenReq = {
      messaging_product: 'whatsapp',
      status: 'read',
      message_id: message.id,
    };

    try {
      await Promise.all([
        axios.post(url, payload, { headers: { 'Content-Type': 'application/json' } }),
        axios.post(url, msgSeenReq, { headers: { 'Content-Type': 'application/json' } })
      ]);
      console.log('Message Sent');
    } catch (error) {
      console.error(error);
    }
  };
  
  res.sendStatus(200);
});

export default router;