import { Box } from "@chakra-ui/react";
import React from "react";
import RequestBubble from "./RequestBubble";
import { ShowRequest } from "../utils";

interface Props {
  requests: ShowRequest[];
  refetch: () => void;
}

const BubbleContainer = ({ requests, refetch }: Props) => {
  return (
    <Box>
      <Box
        fontSize="36px"
        fontFamily="monospace"
        color="black"
        borderBottom="1px solid black"
        mb="30px"
      >
        REQUESTED SHOWS
      </Box>
      {requests.map((r, i) => (
        <RequestBubble key={r.id} index={i} request={r} refetch={refetch} />
      ))}
    </Box>
  );
};

export default BubbleContainer;
