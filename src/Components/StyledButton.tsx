import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  handleClick: () => void;
  label: string;
}

const StyledButton = ({ handleClick, label }: Props) => {
  return (
    <Button
      onClick={handleClick}
      borderRadius="0px"
      border="1px solid black"
      bgColor="transparent"
      _hover={{
        color: "white",
        bgColor: "black",
      }}
    >
      {label}
    </Button>
  );
};

export default StyledButton;
