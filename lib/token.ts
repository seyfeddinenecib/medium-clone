import jwt, { JwtPayload } from "jsonwebtoken";
export const generateToken = (username: string): string => {
  return jwt.sign({ username }, process.env.access_token_key || "", {
    expiresIn: "8d",
  });
};

export const verifyToken = (token: string): JwtPayload => {
  const payload = jwt.verify(token, process.env.access_token_key || "");
  return payload as JwtPayload;
};
