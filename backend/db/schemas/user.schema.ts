import { Schema } from "mongoose";

interface IUserSchema {
  _id: string;
  username: string;
  password: string;
}

const userSchema = new Schema<IUserSchema>({
  _id: String,
  username: String,
  password: String,
});

export type { IUserSchema };
export default userSchema;
