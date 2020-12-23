import { Router } from 'express';

const routes = Router();

routes.get('/test', (req, res) => {
  return res.json({
    message: 'Mistery-friend API is OK',
  });
});

export default routes;
