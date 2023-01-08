import { Box, Text } from "@chakra-ui/react";

const ArticleCard = () => {
  return (
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
      <Text fontSize="4xl">
        this is also this this is an article about how to be smart
      </Text>
      <Text fontSize="md">posted 14 june 2022</Text>
      <Text fontSize="small">by hamzouvic</Text>
    </Box>
  );
};

export default ArticleCard;
