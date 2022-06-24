import {
  Box,
  Container,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Layout from "components/Layout";
import ChangeEmail from "components/Pages/Panel/ChangeEmail/ChangeEmail";
import ChangeName from "components/Pages/Panel/ChangeName/ChangeName";
import ChangePassword from "components/Pages/Panel/ChangePassword/ChangePassword";
import { useAuth } from "contexts/AuthContext";
import React from "react";

const UserPanel = () => {
  //@ts-ignore TODO:
  const { currentUser } = useAuth();
  console.log(currentUser);

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
                <Text mt="30px">
                  Nazwa użytkownika: {currentUser.displayName}
                </Text>
              </Box>
            </TabPanel>
            <TabPanel>
              <Flex mt="50px" justifyContent="space-between" mb="150px">
                <Box w="100%">
                  <Box boxShadow="base" maxW="100%" mb="30">
                    <ChangeName />
                  </Box>
                  <Box boxShadow="base" maxW="100%">
                    <ChangePassword />
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
