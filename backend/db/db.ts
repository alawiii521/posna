import mongoose, { Connection } from "mongoose";
import userSchema, { IUserSchema } from "./schemas/user.schema";

const DB_NAME = "posna";

type DBModels = {
  User: mongoose.Model<IUserSchema>;
};

type DB = {
  connection: Connection;
  models: DBModels;
};

let db: DB;

function setupDB(connection: Connection): DBModels {
  return {
    User:
      connection.models.User ||
      connection.model<IUserSchema>("User", userSchema),
  };
}

async function getDB(): Promise<DB> {
  if (db) {
    return db;
  }

  await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db = {
    connection: mongoose.connection,
    models: setupDB(mongoose.connection),
  };
  db.connection.on("error", console.error.bind(console, "connection error:"));

  return db;
}

export default getDB;
