import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  handleClick: () => void;
  label: string;
  disabled?: boolean;
}

// A button with custom styling which I reused in multiple components.
const StyledButton = ({ handleClick, label, disabled }: Props) => {
  return (
    <Button
      onClick={handleClick}
      borderRadius="0px"
      border="1px solid black"
      bgColor="transparent"
      isDisabled={disabled}
      _hover={{
        color: "white",
        bgColor: "black",
      }}
      _disabled={{
        color: "gray",
        bgColor: "transparent",
        border: "1px solid gray",
      }}
    >
      {label}
    </Button>
  );
};

export default StyledButton;
