import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "components/Layout";
import ChangeEmail from "components/Pages/Panel/ChangeEmail/ChangeEmail";
import ImagePanel from "components/Pages/Panel/ImagePanel";
import { useAuth } from "contexts/AuthContext";
import React from "react";
import colors from "theme/base/colors";

const UserPanel = () => {
  //@ts-ignore TODO:
  const { currentUser } = useAuth();
  console.log(currentUser.email);

  return (
    <Layout>
      <Container maxW="7xl" h="100%">
        <Tabs isFitted variant="enclosed" mt="50px">
          <TabList>
            <Tab>Profil</Tab>
            <Tab>Zmień dane</Tab>
            <Tab>Ustawienia</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box mt="80px">
                <Image
                  h="150px"
                  borderRadius="50%"
                  src="https://bit.ly/dan-abramov"
                />
              </Box>
            </TabPanel>
            <TabPanel>
              <Flex mt="50px" justifyContent="space-between" mb="150px">
                <Box w="100%">
                  <ImagePanel />
                </Box>
                <Box w="100%">
                  <Box boxShadow="base" maxW="600px" mb="30">
                    <Accordion defaultIndex={[0]} allowMultiple>
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box flex="1" textAlign="left">
                              Zmień nazwę użytkownika
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel>
                          <Box mt="10px">
                            <h3>Nowa Nazwa</h3>
                            <Input mt="20px" maxW="300px" />
                          </Box>
                          <Button
                            display={{ base: "none", md: "inline-flex" }}
                            fontSize="md"
                            mt="30px"
                            fontWeight="600"
                            color={"white"}
                            bg={useColorModeValue(
                              colors.orange[400],
                              colors.orange[500]
                            )}
                            _hover={{
                              bg: "orange.300",
                            }}
                          >
                            Zmień nazwę
                          </Button>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                  <Box boxShadow="base" maxW="600px">
                    <Accordion defaultIndex={[0]} allowMultiple>
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box flex="1" textAlign="left">
                              Zmień hasło
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel>
                          <Box mt="10px">
                            <h3>Nowe Hasło</h3>
                            <Input mt="20px" maxW="300px" />
                          </Box>
                          <Box mt="30px">
                            <h3>Powtórz Hasło</h3>
                            <Input mt="20px" maxW="300px" />
                          </Box>
                          <Button
                            display={{ base: "none", md: "inline-flex" }}
                            fontSize="md"
                            mt="30px"
                            fontWeight="600"
                            color={"white"}
                            bg={useColorModeValue(
                              colors.orange[400],
                              colors.orange[500]
                            )}
                            _hover={{
                              bg: "orange.300",
                            }}
                          >
                            Zmień hasło
                          </Button>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                  <ChangeEmail />
                </Box>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  );
};

export default UserPanel;
