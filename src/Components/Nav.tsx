import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import NavLink from "./NavLink";

// the navbar with links to the home page, tour page, shop page, and contact us page
const Nav = () => {
  return (
    <Flex
      w="100%"
      textAlign="center"
      h="50px"
      borderBottom="1px solid #f2f2f2"
      px="2%"
    >
      <NavLink to="/" width="115px" py="7px">
        <Image src="nakedsaintslogo.png" w="100px" m="0 auto" />
      </NavLink>
      <NavLink to="/tour" width="60px">
        Tour
      </NavLink>
      <NavLink to="/shop" width="100px">
        Shop
      </NavLink>
      <NavLink to="/contact-us" width="100px">
        Contact Us
      </NavLink>
    </Flex>
  );
};

export default Nav;
