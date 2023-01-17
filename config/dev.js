import * as dotenv from 'dotenv';
dotenv.config();
export const config = {
    EXPRESS_PORT:process.env.EXPRESS_PORT,
    EXPRESS_HOST:process.env.EXPRESS_HOST,
};