import { Link } from "@chakra-ui/react";
import React from "react";

// A link styled as a button, that can be used to navigate to a different page.
interface Props {
  to: string;
  label: string;
  margin?: string;
  width?: string;
  blank?: boolean;
}

const ButtonLink = ({ to, label, margin, width, blank }: Props) => {
  return (
    <Link
      href={to}
      target={blank ? "_blank" : "_self"}
      w={width ?? "150px"}
      borderRadius="0px"
      bgColor="transparent"
      color="black"
      border="1px solid black"
      _hover={{
        bgColor: "black",
        color: "white",
      }}
      textAlign="center"
      py="10px"
      m={margin}
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
