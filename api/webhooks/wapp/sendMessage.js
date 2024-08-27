import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const { GRAPH_API_VERSION, WAPP_PHONE_NUMBER_ID, WAPP_ACCESS_TOKEN } = process.env;

//  TAKES AN ARRAY OF CONTACTS / PHONE NUMBER'S
const sendWappMsg = async (contacts, msgTemp) => {
  try {    
    const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${WAPP_PHONE_NUMBER_ID}/messages?access_token=${WAPP_ACCESS_TOKEN}`;

    contacts.forEach(async contact => {
      const payload = {
        messaging_product: 'whatsapp',
        to: contact,
        text: { body: msgTemp },
      };
      await axios.post(url, payload, { headers: { 'Content-Type': 'application/json' }});
    });
    
  } catch (error) {
    console.error('Error sending request:', error);
  }
}

export default sendWappMsg;