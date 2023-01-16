import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "../components/header";
import { StoreProvider } from "easy-peasy";
import store from "../lib/store";
const theme = extendTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <ChakraProvider theme={theme}>
        <Box
          height="100vh"
          width="100vw"
          bg="red.50"
          overflowX="hidden"
          overflowY="auto"
        >
          <Header />
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </StoreProvider>
  );
}
