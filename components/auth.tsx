import { Button, Flex, Input, InputProps } from "@chakra-ui/react";
import { FC, FormEvent, useRef } from "react";

const Auth: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const username = useRef<any>(null);
  const password = useRef<any>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.current && password.current) {
      console.log(username.current.value, password.current?.value);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex
        align="center"
        alignItems="end"
        direction="column"
        justify="center"
        gap="10px"
      >
        <Input
          ref={username}
          outlineColor="gray.300"
          placeholder="username"
          _placeholder={{ color: "gray.300" }}
        />
        <Input
          ref={password}
          outlineColor="gray.300"
          placeholder="password"
          type="password"
          _placeholder={{ color: "gray.300" }}
        />
        <Button
          paddingX="40px"
          _hover={{ bg: "gray.400" }}
          textTransform="uppercase"
          variant="solid"
          bg="blue.400"
          type="submit"
        >
          {mode}
        </Button>
      </Flex>
    </form>
  );
};

export default Auth;
