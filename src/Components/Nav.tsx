import { Flex, Image, Link } from "@chakra-ui/react";
import React from "react";

const Nav = () => {
  return (
    <Flex
      w="100%"
      textAlign="center"
      h="50px"
      borderBottom="1px solid #f2f2f2"
      px="2%"
    >
      <Link
        href="/"
        w="115px"
        _hover={{ bgColor: "#454545" }}
        py="7px"
        cursor="pointer"
      >
        <Image src="nakedsaintslogo.png" w="100px" m="0 auto" />
      </Link>
      <Link
        href="/tour"
        w="60px"
        _hover={{ bgColor: "#454545" }}
        py="10px"
        cursor="pointer"
      >
        Tour
      </Link>
      <Link
        href="/contact-us"
        w="100px"
        _hover={{ bgColor: "#454545" }}
        py="10px"
        cursor="pointer"
      >
        Contact Us
      </Link>
    </Flex>
  );
};

export default Nav;
