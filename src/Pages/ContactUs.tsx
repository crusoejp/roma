import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import RequestModal from "../Components/RequestModal";
import { ShowRequest, mockApiUrl } from "../utils";
import StyledButton from "../Components/StyledButton";
import BubbleContainer from "../Components/BubbleContainer";

// the text message page
const ContactUs = () => {
  // useState to store the show requests
  const [requests, setRequests] = useState<ShowRequest[]>([]);
  // use state for the modal
  const [open, setOpen] = useState<boolean>(false);

  // READ - Get all show requests from mock API
  const getShowRequests = async () => {
    const res = await fetch(`${mockApiUrl}/requested_date`, {
      method: "GET",
    });

    const data = await res.json();

    setRequests(data);
  };

  // useEffect to get show requests on page load
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
