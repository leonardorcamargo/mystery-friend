import express, { Express } from 'express';
import { testRoutes } from './routes';

export class Server {
  private app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(testRoutes);
  }

  start() {
    this.app.listen(process.env.PORT || 3000, () => {
      console.info(`API is running on port ${process.env.PORT || 3000} 🚀`);
    });
  }
}
