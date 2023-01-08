import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Box, Text } from "@chakra-ui/react";
import Header from "../components/header";
import ArticleCard from "../components/cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box
      height="100vh"
      width="container.md"
      marginX="auto"
      bg="red.50"
      overflowX="hidden"
      overflowY="auto"
      color="black"
    >
      <Text fontSize="5xl">Main feed</Text>
      <Text fontSize="xl" paddingY="10px">
        check out articles from users here
      </Text>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </Box>
  );
}
