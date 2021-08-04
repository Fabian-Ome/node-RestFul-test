import express from 'express';
// import { json } from 'express';

const app = express();

//routes
import IndexRoutes from './routes/index.routes'
import TaskRoutes from './routes/tasks.routes';
import { json } from 'express';
//settings 
app.set('port', process.env.PORT || 3000);

//middlewares
// app.use(json());
app.use(express.json());

//routes
app.use(IndexRoutes);
app.use('/Task', TaskRoutes);
export default app;
