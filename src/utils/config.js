import dotenv from 'dotenv';
dotenv.config();

export const config = {
    node: {
        port: process.env.NODE_PORT
    }
}