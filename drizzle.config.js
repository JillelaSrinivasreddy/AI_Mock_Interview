import 'dotenv/config';

console.log(process.env.DRIZZLE_DB_URL);

export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DRIZZLE_DB_URL,
  },
};