import {
  Button,
  Flex,
  Input,
  InputProps,
  UsePinInputFieldProps,
} from "@chakra-ui/react";
import { useStoreActions } from "easy-peasy";
import { useRouter } from "next/router";
import { FC, FormEvent, useRef } from "react";
import { signin } from "../lib/mutations";

const Auth: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const setSignIn = useStoreActions((state: any) => state.signin);
  const router = useRouter();
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (username.current && password.current) {
      let u = username.current.value;
      let p = password.current.value;
      if (mode === "signin") {
        const a = await signin({ username: u, password: p });
        if (a.username) {
          setSignIn(a);
          router.push("/");
        }
      }
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
