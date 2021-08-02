import express from 'express';

const app = express();

//routes
import IndexRoutes from './routes/index.routes'
import TaskRoutes from './routes/tasks.routes';
//settings 
app.set('port', process.env.PORT || 3000);



//routes
app.use(IndexRoutes);
app.use('/Task', TaskRoutes);
export default app;
