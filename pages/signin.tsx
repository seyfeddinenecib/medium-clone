import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Auth from "../components/auth";

const Signin = () => {
  return (
    <Box
      padding="40px"
      bg="gray.50"
      borderRadius="15px"
      color="black"
      marginX="auto"
      maxWidth="lg"
      marginTop="100px"
      textAlign="center"
      gap="40px"
    >
      <Auth mode="signin" />
    </Box>
  );
};

export default Signin;
