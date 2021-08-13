import type { NextApiRequest, NextApiResponse } from "next";
import Status from "http-status";
import AuthDB from "../../backend/db/auth.db";

console.log(AuthDB.getDB());

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const password = req.body.password;
  const username = req.body.username;
  const result = await AuthDB.login(username, password);
  if (result) {
    res.status(Status.OK).json({ username });
  } else {
    res.status(Status.UNAUTHORIZED).send({});
  }
}
