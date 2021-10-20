import type { NextApiRequest, NextApiResponse } from "next";
import getDB from "../../backend/db/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("test");
  await getDB();
  res.status(200).json({ name: "John Doe" });
}
