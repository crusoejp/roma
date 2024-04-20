import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";

interface Props {
  children: any;
}

// puts the nav and the footer on every page
const AppContainer = ({ children }: Props) => {
  return (
    <Box w="100%" bgColor="black" color="white">
      <Nav />
      {children}
      <Flex>
        <Box w="100%" textAlign="center" py="20px" h="15vh">
          © 2024 Naked Saints
        </Box>
      </Flex>
    </Box>
  );
};

export default AppContainer;
