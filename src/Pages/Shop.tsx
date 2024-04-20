import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Title from "../Components/Title";
import ShopItem from "../Components/ShopItem";
import { Item, mockApiUrl } from "../utils";

// let them spend their money
const Shop = () => {
  const [items, setItems] = React.useState<Item[]>([]);

  // READ - Fetch shop items from mock API
  const getShopItems = async () => {
    const res = await fetch(`${mockApiUrl}/shop_item`, {
      method: "GET",
    });

    const data = await res.json();

    // useState to set the shop items
    setItems(data);
  };

  // useEffect to get shop items on page load
  useEffect(() => {
    getShopItems();
  }, []);

  return (
    <Box minH="85vh" color="black" bgColor="white" p="2%">
      <Title label="BUY OUR MERCH" />
      <Flex gap="5px" wrap="wrap" mt="20px" justifyContent="center">
        {items.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </Flex>
    </Box>
  );
};

export default Shop;
