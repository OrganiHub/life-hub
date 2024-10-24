import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient>;

if (!client) {
    client = new MongoClient(uri!);
    clientPromise = client.connect();
}

export async function connectToDatabase() {
    const connectedClient = await clientPromise;
    return connectedClient.db('lifehub');
}