import { Router } from 'express';
import app from '../server';
const router = Router();

// dataBase connection
import { connect } from '../database'

router.get('/', async (req, res) => {

    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    console.log(result);
    res.json(result);
});

export default router;
