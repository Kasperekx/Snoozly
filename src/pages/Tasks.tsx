import React from "react";
import {Box, Container} from "@chakra-ui/react";
import Timer from "../components/Pages/Tasks/Timer/Timer";
import Layout from "../components/Layout";
import TaskList from "components/Pages/Tasks/TaskList/TaskList";

const Tasks = () => {
  return (
    <Layout>
      <Container
        maxW="7xl"
        h="100%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box mt="200px">
          <Timer/>
        </Box>
        <Box mt="200px">
          <TaskList/>
        </Box>
      </Container>
    </Layout>
  );
};

export default Tasks;
