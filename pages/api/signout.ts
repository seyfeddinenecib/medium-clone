import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
export default function signout(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize(process.env.COOKIE_ID, "", {
      maxAge: 0,
      httpOnly: true,
    })
  );
}
