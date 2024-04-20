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

// I'm a serial offender on not naming my interfaces. I'm not sorry.
// You should only have one interface per component, so it doesn't really need to be named.
interface Props {
  isOpen: boolean;
  onClose: () => void;
  item: Item;
}

// modal for shop items
const ShopItemModal = ({ isOpen, onClose, item }: Props) => {
  // this is kind of the boilerplate for the chakra modal. you'll see it a couple times.
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
