import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../redux/slices/userSlice";
import Navbar from "./Navbar";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

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
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          onClick={(e) => handleLogout(e)}
        >
          LOGOUT
        </Button>
      </Flex>
    </>
  );
};

export default Dashboard;
