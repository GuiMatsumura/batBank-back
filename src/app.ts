import cors from 'cors';
import express, { json } from 'express';
import 'express-async-errors';
import router from './routes/index';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';

const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(json());
app.use(router);
app.use(errorHandlerMiddleware);

export default app;
