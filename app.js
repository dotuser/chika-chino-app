import express from 'express';
import home from './api/home/index.js';
import admin from './api/admin/index.js';
import wappWebhookConfig from './api/webhooks/wapp/webhook.js'
import wappWebhookCtrl from './api/webhooks/wapp/webhookCtrl.js'

const app = express();

app.use( express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));  //  CSS & IMAGES
app.use(express.static('public/temp')); //  UI TEMPLATES

app.use(home);
app.use(admin);

//  WAPP WEBHOOK
app.use(wappWebhookConfig);
app.use(wappWebhookCtrl);

export default app;