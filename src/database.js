// import MongoClient from 'mongodb';
// const { MongoClient } = require('mongodb')
import { MongoClient } from 'mongodb'


export async function connect() {
    try {
        const client = await MongoClient.connect('mongodb://localhost');
        const db = client.db("node-api-zorras");
        console.log('dataBase is connected');
        return db;

    } catch (e) {
        console.log(e);
    }
}
