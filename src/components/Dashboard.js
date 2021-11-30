import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box>
          <Text>Welcome to your Dashboard</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Dashboard;
