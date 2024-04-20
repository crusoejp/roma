import { Box, Flex, Icon, Image, Link } from "@chakra-ui/react";
import React from "react";
import { ShopFontIcon } from "react-md";

const Nav = () => {
  return (
    <Flex
      justifyContent="space-between"
      w="100%"
      textAlign="center"
      h="50px"
      borderBottom="1px solid #f2f2f2"
      px="2%"
    >
      <Flex>
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
          href="/shop"
          w="100px"
          _hover={{ bgColor: "#454545" }}
          py="10px"
          cursor="pointer"
        >
          Shop
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
      <Box py="10px">
        <Icon as={ShopFontIcon} cursor="pointer" />
      </Box>
    </Flex>
  );
};

export default Nav;
