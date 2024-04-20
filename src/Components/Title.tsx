import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  label: string;
}

// A title component that I reused on almost every page.
const Title = ({ label }: Props) => {
  return (
    <Box
      fontSize="36px"
      fontFamily="monospace"
      w="100%"
      borderBottom="1px solid black"
      color="black"
    >
      {label}
    </Box>
  );
};

export default Title;
