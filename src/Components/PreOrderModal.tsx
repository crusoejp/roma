import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import StyledButton from "./StyledButton";
import { mockApiUrl } from "../utils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const PreOrderModal = ({ isOpen, onClose }: Props) => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async () => {
    if (!email) {
      return;
    }

    // CREATE - Post email to mock API
    await fetch(`${mockApiUrl}/preorder`, {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Oopsies!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            We're sorry, but this item isn't available for pre-order at this
            time. Send us your email and we'll let you know when it's available.
          </Box>
          <Input
            mt="20px"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </ModalBody>

        <ModalFooter>
          <StyledButton handleClick={handleSubmit} label="Submit" />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PreOrderModal;
