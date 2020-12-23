import express from 'express';

const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
  return res.json({
    message: 'Mistery-friend API is OK',
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.info(`API is running on port ${process.env.PORT || 3000} 🚀`);
});
