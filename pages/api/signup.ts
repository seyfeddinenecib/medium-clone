import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../lib/crypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(501).send({ message: "wrong information" });
  try {
    const user = await prisma.user.create({
      data: {
        username,
        password: hashPassword(password),
      },
    });
    res.json(user);
  } catch (e) {
    return res.json({ message: "username exists" });
  }
}
