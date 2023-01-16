import { hashSync, compareSync, compare } from "bcrypt";

const saltRound = 10;

export const hashPassword = (password: string): string => {
  return hashSync(password, saltRound);
};

export const validatePassword = (
  password: string,
  crypted: string
): boolean => {
  return compareSync(password, crypted);
};
