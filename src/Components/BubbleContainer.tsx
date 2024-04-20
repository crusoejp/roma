import { Flex } from "@chakra-ui/react";
import React from "react";
import RequestBubble from "./RequestBubble";
import { ShowRequest } from "../utils";
import Title from "./Title";

interface Props {
  requests: ShowRequest[];
  refetch: () => void;
}

const BubbleContainer = ({ requests, refetch }: Props) => {
  return (
    <Flex flexDir="column" gap="20px">
      <Title label="REQUESTED SHOWS" />
      {requests.map((r, i) => (
        <RequestBubble key={r.id} index={i} request={r} refetch={refetch} />
      ))}
    </Flex>
  );
};

export default BubbleContainer;
