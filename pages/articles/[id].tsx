import { Avatar, Text, Box, Flex, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import prisma from "../../lib/prisma";
import { verifyToken } from "../../lib/token";

const Article = ({ article, username }: { article: {}; username: string }) => {
  const router = useRouter();
  const handleEdit = () => {
    router.push("/createArticle");
  };
  const handleDelete = () => {};
  return (
    <Box color="black" padding="30px" maxWidth="4xl" marginX="auto">
      <Text fontSize="5xl" casing="capitalize">
        {article.title}
      </Text>
      <Flex padding="30px" align="center" gap="10px">
        <Avatar></Avatar>
        <Text>{article.user.username}</Text>
      </Flex>
      <Text>{article.content}</Text>
      <Flex justify="right" gap="10px">
        <Button onClick={handleEdit} variant="solid" colorScheme="green">
          Edit
        </Button>
        <Button onClick={handleDelete} variant="solid" colorScheme="red">
          delete
        </Button>
      </Flex>
    </Box>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  const token = req.cookies[process.env.COOKIE_ID as string];
  if (!token)
    return {
      redirect: {
        destination: "/signin",
      },
    };
  const { username } = verifyToken(token);
  if (!username)
    return {
      redirect: {
        destination: "/signin",
      },
    };
  const article = await prisma.article.findUnique({
    where: {
      id: +query.id,
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
  return {
    props: { article: JSON.parse(JSON.stringify(article)) },
  };
};

export default Article;
