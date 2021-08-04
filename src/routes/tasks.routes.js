import { Router } from 'express';
import app from '../server';
const router = Router();

// dataBase connection
import { connect } from '../database'
import { ObjectId } from 'mongodb';

router.get('/', async (req, res) => {

    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    console.log(result);
    res.json(result);
});

router.post('/', async (req, res) => {
    const db = await connect();
    // const {title, description } = req.body;
    const Task = {
        title: req.body.title,
        description: req.body.description
    }
    const result = await db.collection('tasks').insertOne(Task);
    res.json(result);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('tasks').findOne({ _id: ObjectId(id) });
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
    res.json({
        Message: `Task ${id} deleted`,
        result
    })
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updateTask = {
        title: req.body.title,
        description: req.body.description
    };
    const db = await connect();
    await db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: updateTask });
    res.json({
        Message: `Task ${id} updated`
    });
})

export default router;
