import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";

import Routing from "./routes/routing";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Routing />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
