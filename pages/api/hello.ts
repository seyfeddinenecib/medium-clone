// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import validateRoute from "../../lib/auth";

type Data = {
  name: string;
};

export default validateRoute(function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  user: User
) {
  res.status(200).json(user);
});
