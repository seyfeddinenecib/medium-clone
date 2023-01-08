import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/react";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box
      height="100vh"
      width="100vw"
      bg="red.50"
      overflowX="hidden"
      overflowY="auto"
    >
      hello world
    </Box>
  );
}
