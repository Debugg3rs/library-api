import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const SAVEFILESORG_API_KEY = process.env.SAVEFILESORG_API_KEY;
const NODE_ENV = process.env.NODE_ENV;

export default {
  MONGODB_URI,
  PORT,
  SAVEFILESORG_API_KEY,
  NODE_ENV,
};
