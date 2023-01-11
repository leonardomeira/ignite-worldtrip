import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { theme } from '../styles/theme';
import '../styles/carousel.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;