import { ChakraProvider } from "@chakra-ui/react";
import Routing from "./routes/routing";
import theme from "theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routing />
    </ChakraProvider>
  );
}

export default App;
