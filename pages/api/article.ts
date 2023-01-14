import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validateRoute from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: User) => {
    switch (req.method) {
      case "GET":
        let articles;
        try {
          articles = await prisma.article.findMany({
            where: {
              userId: user.id,
            },
          });
          return res.status(200).json(articles);
        } catch (e) {
          throw Error("dont know k");
        }

        break;

      case "POST":
        const { title, content } = req.body;
        if (!title || !content)
          return res.status(301).json({ message: "wrong request" });
        let article;
        try {
          article = await prisma.article.create({
            data: {
              content,
              title,
              userId: user.id,
            },
          });
          return res.status(200).json(article);
        } catch (e) {
          throw Error("article not registered");
        }
        break;
      case "DELETE":
        const { id } = req.body;
        let respose;
        try {
          respose = await prisma.article.deleteMany({
            where: {
              id: +id,
              userId: user.id,
            },
          });
          res.status(200).json(respose);
        } catch (e) {}
        break;
      default:
        res.status(404).json({ message: "wrong request" });
        break;
    }
  }
);
