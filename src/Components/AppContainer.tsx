import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";

interface Props {
  children: any;
}

const AppContainer = ({ children }: Props) => {
  return (
    <Box w="100%" bgColor="black" color="white">
      <Nav />
      {children}
      <Flex>
        <Box w="100%" textAlign="center" py="20px" h="15vh">
          © 2021 Naked Saints
        </Box>
      </Flex>
    </Box>
  );
};

export default AppContainer;
