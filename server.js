import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));