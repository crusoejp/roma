import { Link } from "@chakra-ui/react";
import React from "react";

interface Props {
  children?: any;
  width: string;
  to: string;
  py?: string;
}

// A styled link that can be used to navigate to a different page. Reused several times in Nav.tsx
const NavLink = ({ children, width, to, py }: Props) => {
  return (
    <Link
      href={to}
      w={width}
      _hover={{ bgColor: "#454545" }}
      py={py ?? "10px"}
      cursor="pointer"
    >
      {children}
    </Link>
  );
};

export default NavLink;
