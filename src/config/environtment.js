import dotenv from 'dotenv';
dotenv.config();

export const env = {
    MONGO_URI: process.env.MONGODB_URI,
    HOST: process.env.HOST,
    PORT: process.env.PORT
}
