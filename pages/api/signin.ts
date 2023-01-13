import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import cookie from "cookie";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;
  if (!username || !password) return res.status(501).send();
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (user) {
    let token = generateToken(user.username);
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("qid", token, {
        httpOnly: true,
        path: "/",
        maxAge: 8 * 60 * 60,
        sameSite: "lax",
      })
    );
    return res.status(200).json(user);
  } else {
    return res.status(401).json({ message: "user not found" });
  }
}

const generateToken = (username: string): string => {
  return jwt.sign({ username }, "ksdljfasdlkjflsdjafladfkj", {
    expiresIn: "8d",
  });
};
