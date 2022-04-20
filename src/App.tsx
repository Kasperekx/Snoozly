import { ChakraProvider } from "@chakra-ui/react";
import Routing from "./routes/routing";
import theme from "theme";
import { AuthProvider } from "contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Routing />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
