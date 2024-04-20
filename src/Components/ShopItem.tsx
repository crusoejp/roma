import { Box, Image } from "@chakra-ui/react";
import { Item } from "../utils";
import React, { useState } from "react";
import ShopItemModal from "./ShopItemModal";

interface Props {
  item: Item;
}

// card items for shop
const ShopItem = ({ item }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Box
      cursor="pointer"
      w="255px"
      bgColor="black"
      color="white"
      p="15px"
      borderRadius="8px"
      onClick={() => setOpen(true)}
    >
      <Image src={item.image} h="270px" w="225px" m="0 auto" />
      <Box mt="10px">{item.name}</Box>
      <Box>{item.price}</Box>
      <ShopItemModal isOpen={open} onClose={() => setOpen(false)} item={item} />
    </Box>
  );
};

export default ShopItem;
