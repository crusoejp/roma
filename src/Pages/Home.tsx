import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import StyledButton from "../Components/StyledButton";
import PreOrderModal from "../Components/PreOrderModal";

// the home page with the pre-order button
const Home = () => {
  // the state that controls the modal
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Flex
      w="100%"
      p="2%"
      bgImage="watchtower.jpg"
      h="90vh"
      bgSize="cover"
      bgRepeat="no-repeat"
      justifyContent="center"
      alignContent="center"
      flexDir="column"
    >
      <Box m="0 auto 20px" fontSize="36px" fontFamily="monospace" color="black">
        PRE-ORDER WATCHTOWER
      </Box>
      <Box w="fit-content" m="0 auto">
        <StyledButton handleClick={() => setOpen(true)} label="Pre-Order Now" />
      </Box>
      <PreOrderModal isOpen={open} onClose={() => setOpen(false)} />
    </Flex>
  );
};

export default Home;
