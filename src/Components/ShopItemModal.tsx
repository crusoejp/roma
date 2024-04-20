import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Item } from "../utils";
import React from "react";
import StyledButton from "./StyledButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  item: Item;
}

const ShopItemModal = ({ isOpen, onClose, item }: Props) => {
  const addToCart = (item: Item) => {};
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={item.image} h="400px" />
          <Box mt="10px">{item.price}</Box>
          <Box>{item.description}</Box>
        </ModalBody>
        <ModalFooter>
          <StyledButton
            handleClick={() => addToCart(item)}
            label="Add To Cart"
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ShopItemModal;
