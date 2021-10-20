import { hash, compare } from "bcrypt";
import getDB from "./db";
const saltRounds = 10;

async function signup(username: string, password: string): Promise<string> {
  const hashedPassword = await hash(password, saltRounds);
  const db = await getDB();
  const userDoc = new db.models.User({
    _id: username,
    username,
    password: hashedPassword,
  });

  await userDoc.save();

  return username;
}

async function login(username: string, password: string): Promise<boolean> {
  return false;
}

const AuthDB = { login, signup };
export default AuthDB;
