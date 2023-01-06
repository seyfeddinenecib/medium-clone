import {
  Box,
  Button,
  Flex,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineCloseSquare, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  {
    name: "Main Feed",
    url: "/",
  },
  {
    name: "Create Article",
    url: "/article",
  },
];

const Header = () => {
  const [isLargerThan800] = useMediaQuery("(min-width:800px)");
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const router = useRouter();
  return (
    <Box bg="gray.200" height="50px">
      <Flex
        padding="10px"
        height="100%"
        align="center"
        justify="space-between"
        marginX="auto"
        maxWidth="container.xl"
      >
        <Box width="30%">
          <NextImage
            src={"/logo.png"}
            width="190"
            height="80"
            alt="medium"
            title="logo"
          />
        </Box>
        <Box width="40%" display={["none", "inline-block"]}>
          <List display="flex" justifyContent="center" gap="20px">
            {navLinks.map((nav) => (
              <ListItem>
                <Link href={nav.url}>{nav.name}</Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box width="30%">
          <Flex align="center" justify="right" gap="10px">
            <Text display={["none", "none", "inline-block"]}>
              hamzouvic@gmail.com
            </Text>
            <Button
              display={["none", "inline-block"]}
              variant="unstyled"
              bg="blue.200"
              color="blue.600"
              padding="8px 20px"
              sx={{
                "&:hover": {
                  bg: "blue.300",
                },
              }}
              onClick={() => router.push("/signin")}
            >
              Login
            </Button>
            <Box
              onClick={toggleMenu}
              fontSize="30px"
              display={["inline-block", "none"]}
            >
              {isOpen ? <AiOutlineCloseSquare /> : <AiOutlineMenu />}
            </Box>
            {isOpen ? (
              <Box
                position="absolute"
                textAlign="center"
                zIndex="100"
                left="10px"
                top="55px"
                bg="gray.600"
                padding="10px"
                borderRadius="5px"
                width="calc(100% - 20px)"
                display={["inline-block", "none"]}
              >
                <List
                  display="flex"
                  flexDirection="column"
                  gap="20px"
                  flexBasis="100%"
                >
                  {navLinks.map((nav) => (
                    <ListItem>
                      <Link href={nav.url}>{nav.name}</Link>
                    </ListItem>
                  ))}
                  <Button
                    variant="unstyled"
                    bg="blue.200"
                    color="blue.600"
                    padding="8px 20px"
                    sx={{
                      "&:hover": {
                        bg: "blue.300",
                      },
                    }}
                  >
                    Login
                  </Button>
                </List>
              </Box>
            ) : null}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
