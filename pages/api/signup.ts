import type { NextApiRequest, NextApiResponse } from "next";
import Status from "http-status";
import AuthDB from "../../backend/db/auth.db";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const username = req.body.username;
  const password = req.body.password;
  await AuthDB.signup(username, password);
  res.status(Status.CREATED).json({ username });
}
