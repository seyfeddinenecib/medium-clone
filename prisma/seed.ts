import prisma from "../lib/prisma";
import { User } from "@prisma/client";
import { hashPassword } from "../lib/crypt";

const data = {
  user: {
    username: "hamzouvic",
    password: hashPassword("password"),
  },
};
const run = async () => {
  const user = await prisma.user.upsert({
    where: { username: data.user.username },
    update: {},
    create: {
      ...(data.user as User),
      Articles: {
        create: new Array(10).fill(1).map((_, k) => {
          return {
            title: `${k + 1} - this is a test article from ${
              data.user.username
            }`,
            content: "hello from the article",
          };
        }),
      },
    },
  });
};

run();
