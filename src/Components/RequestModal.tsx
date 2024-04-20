import {
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import StyledButton from "./StyledButton";
import { mockApiUrl } from "../utils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  refetch: () => void;
}

// modal for requesting a show on the contact us page
const RequestModal = ({ isOpen, onClose, refetch }: Props) => {
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [name, setName] = useState<string>("");

  const submitRequest = async () => {
    if (!city || !state || !name) {
      return;
    }

    // CREATE - Post requested show to mock API
    await fetch(`${mockApiUrl}/requested_date`, {
      method: "POST",
      body: JSON.stringify({
        city: `${city}, ${state}`,
        likes: 0,
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // we're going to refetch to grab the new show request
    refetch();
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Request A Show</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="column" gap="10px">
            <Input
              placeholder="City"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              placeholder="State or Country"
              id="state"
              onChange={(e) => setState(e.target.value)}
            />
            <Input
              placeholder="Your Name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <StyledButton handleClick={submitRequest} label="Submit" />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RequestModal;
