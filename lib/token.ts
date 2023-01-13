import jwt from "jsonwebtoken";
export const generateToken = (username: string): string => {
  return jwt.sign({ username }, process.env.access_token_key || "", {
    expiresIn: "8d",
  });
};

export const verifyToken = (token: string) => {
  const payload = jwt.verify(token, process.env.access_token_key || "");
  return payload;
};
