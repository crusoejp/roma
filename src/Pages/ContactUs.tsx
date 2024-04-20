import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import RequestModal from "../Components/RequestModal";
import RequestBubble from "../Components/RequestBubble";
import { ShowRequest } from "../utils";
import StyledButton from "../Components/StyledButton";
import BubbleContainer from "../Components/BubbleContainer";

const ContactUs = () => {
  const [requests, setRequests] = useState<ShowRequest[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const getShowRequests = async () => {
    const res = await fetch(
      "https://66234bc83e17a3ac846ef8b2.mockapi.io/requested_date",
      {
        method: "GET",
      }
    );

    const data = await res.json();

    setRequests(data);
  };

  useEffect(() => {
    getShowRequests();
  }, []);

  return (
    <Box bgColor="white" p="2%" minH="85vh">
      <Box>
        <BubbleContainer requests={requests} refetch={getShowRequests} />
        <Box m="30px auto" w="150px">
          <StyledButton
            handleClick={() => setOpen(true)}
            label="Request A Show"
          />
        </Box>
      </Box>
      <RequestModal
        isOpen={open}
        onClose={() => setOpen(false)}
        refetch={getShowRequests}
      />
    </Box>
  );
};

export default ContactUs;
