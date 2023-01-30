import dotenv from "dotenv";
dotenv.config();
export const config = {
  EXPRESS_PORT: process.env.EXPRESS_PORT,
  EXPRESS_HOST: process.env.EXPRESS_HOST,
  PG_USER: process.env.PGUSER,
  PG_HOST: process.env.PGHOST,
  PG_PASSWORD: process.env.PGPASSWORD,
  PG_DATABASE: process.env.PGDATABASE,
  PG_PORT: process.env.PGPORT,
  JWT_SECRET: process.env.JWTPRIVATEKEY,
};
