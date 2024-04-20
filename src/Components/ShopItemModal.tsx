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
import { Item, mockApiUrl } from "../utils";
import React from "react";
import StyledButton from "./StyledButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  item: Item;
}

// modal for shop items
const ShopItemModal = ({ isOpen, onClose, item }: Props) => {
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
          <StyledButton handleClick={() => {}} label="Out of Stock" disabled />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ShopItemModal;
