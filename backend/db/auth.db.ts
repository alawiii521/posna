import { hash, compare } from "bcrypt";
const saltRounds = 10;

const db: { [key: string]: { username: string; password: string } } = {};

async function signup(username: string, password: string) {
  const hashedPassword = await hash(password, saltRounds);
  db[username] = {
    username,
    password: hashedPassword,
  };
}

async function login(username: string, password: string): Promise<boolean> {
  const hashedPassword = db[username]?.password;
  if (!hashedPassword) {
    return false;
  }
  return await compare(password, hashedPassword);
}

function getDB() {
  return db;
}

const AuthDB = { login, signup, getDB };
export default AuthDB;
