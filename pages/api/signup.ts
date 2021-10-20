import type { NextApiRequest, NextApiResponse } from "next";
import Status from "http-status";
import AuthDB from "../../backend/db/auth.db";
import validator from "../../backend/validator/validator";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const validatorResult = validator.user(req.body);

  if (validatorResult.valid) {
    const username = req.body.username;
    const password = req.body.password;
    const resultUsername = await AuthDB.signup(username, password);
    res.status(Status.CREATED).json({ username: resultUsername });
  } else {
    const error = validatorResult.errors.map((error) => ({
      property: error.property.replace("instance.", ""),
      errorType: error.name,
      message: error.message,
    }));
    res.status(Status.BAD_REQUEST).json({ error });
  }
}
