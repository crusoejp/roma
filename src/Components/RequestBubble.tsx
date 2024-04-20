import React, { useState } from "react";
import { ShowRequest, getInitials, mockApiUrl } from "../utils";
import { Box, Collapse, Flex, Icon } from "@chakra-ui/react";
import { ThumbUpFontIcon, ThumbUpSVGIcon } from "react-md";

interface Props {
  request: ShowRequest;
  index: number;
  refetch: () => void;
}

const RequestBubble = ({ request, index, refetch }: Props) => {
  const [userLiked, setUserLiked] = useState<boolean>(false);
  const left = index % 2 === 0;
  const inverseColor = left ? "black" : "white";
  const color = left ? "white" : "black";
  const [showDelete, setShowDelete] = useState<boolean>(false);

  const handleLike = async () => {
    setUserLiked(!userLiked);
    // UPDATE - send like to server
    await fetch(`${mockApiUrl}/requested_date/${request.id}`, {
      method: "PUT",
      body: JSON.stringify({
        likes: userLiked ? request.likes - 1 : request.likes + 1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    refetch();
  };

  const handleDelete = async () => {
    // DELETE - delete request from server
    await fetch(`${mockApiUrl}/requested_date/${request.id}`, {
      method: "DELETE",
    });

    refetch();
  };

  return (
    <Flex
      m="0 auto"
      w="500px"
      justifyContent={left ? "left" : "right"}
      flexDir={left ? "row" : "row-reverse"}
      gap="5px"
      alignItems="center"
    >
      <Flex
        borderRadius="50%"
        bgColor={color}
        color={inverseColor}
        border={left ? "1px solid black" : "unset"}
        h="40px"
        w="40px"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
      >
        <Box>{getInitials(request.name)}</Box>
      </Flex>
      <Box
        borderRadius="15px"
        color={color}
        bgColor={inverseColor}
        border={left ? "unset" : "1px solid black"}
        mb="10px"
        w="200px"
        p="10px"
        onMouseOver={() => {
          if (request.likes === 0) {
            setShowDelete(true);
          }
        }}
        onMouseLeave={() => setShowDelete(false)}
      >
        <Flex justifyContent="space-between">
          <Box>{request.city}</Box>
          <Collapse in={showDelete}>
            <Box
              cursor="pointer"
              color={color}
              onClick={handleDelete}
              textAlign="right"
            >
              X
            </Box>
          </Collapse>
        </Flex>
        <Flex>
          <Icon
            cursor="pointer"
            color={userLiked ? "pink" : color}
            as={ThumbUpFontIcon}
            onClick={handleLike}
          />
          <Box ml="5px">{request.likes}</Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default RequestBubble;
