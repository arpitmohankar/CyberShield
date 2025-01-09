import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());

app.get('/api/login', (req, res) => {
  res.json('Loading CyberSheld a blockchain based Mediation Platform');
});
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});