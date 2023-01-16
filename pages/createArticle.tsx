import { Box, Button, Input, Text, Textarea } from "@chakra-ui/react";
import { FormEvent } from "react";

const CreateArticle = () => {
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Box color="black" marginX="auto" padding="30px" width="xl">
      <form onSubmit={handleOnSubmit}>
        <Text fontSize="3xl">Title</Text>
        <Input
          placeholder="please enter a title"
          required
          colorScheme="blackAlpha"
          shadow="xl"
          border="solid 1px "
          borderColor="gray.300"
          _placeholder={{ color: "gray.300" }}
        />
        <Text fontSize="3xl">Article text</Text>
        <Textarea
          placeholder="article body"
          shadow="xl"
          border="solid 1px "
          borderColor="gray.300"
          _placeholder={{ color: "gray.300" }}
        />
        <Text color="gray.500" fontSize="small">
          posted as hamzouvic
        </Text>
        <Box textAlign="right">
          <Button type="submit" variant="solid" colorScheme="blackAlpha">
            post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateArticle;
