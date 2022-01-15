import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../themes/themes";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;

const EmptyLayout = ({ children }) => <>{children}</>;
