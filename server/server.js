import express from 'express';
const app = express();

app.get('/api/login', (req, res) => {
  res.send('Loading CyberSheld a blockchain based Mediation Platform');
});
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});