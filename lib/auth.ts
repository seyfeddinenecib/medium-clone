import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { SWRHook } from "swr";
import prisma from "./prisma";
import { verifyToken } from "./token";

export default function validateRoute(
  handler: (req: NextApiRequest, res: NextApiResponse, user: User) => void
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies[process.env.COOKIE_ID as string];
    let user;
    if (token) {
      try {
        const payload = verifyToken(token);
        const { username } = payload;

        user = await prisma.user.findUnique({
          where: {
            username: username as string,
          },
        });
        return handler(req, res, user as User);
      } catch (e) {
        res.status(401).json("bad token");
      }
    }
    res.status(301).json("not authorized");
  };
}
