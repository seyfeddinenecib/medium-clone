import { Box, Link, LinkBox, Text } from "@chakra-ui/react";

const ArticleCard = ({ article }) => {
  return (
    <Link href={`/articles/${article.id}`}>
      <Box
        color="black"
        shadow="2xl"
        border="solid 1px"
        borderColor="gray.300"
        padding="20px 14px"
        borderRadius="6px"
        marginY="10px"
        cursor="pointer"
      >
        <Text fontSize="4xl">{article.title}</Text>
        <Text fontSize="md">posted {formatDate(article.createdAt)}</Text>
        <Text fontSize="small">by {article.user.username}</Text>
      </Box>
    </Link>
  );
};

export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default ArticleCard;
