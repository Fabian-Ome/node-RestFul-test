// import MongoClient from 'mongodb';
const { MongoClient } = require('mongodb')


export async function connect() {
    try {
        const client = await MongoClient.connect('mongodb://localhost');
        const db = client.db("node-api-zorras");
        return db;

    } catch (e) {
        console.log(e); 
    }
}
