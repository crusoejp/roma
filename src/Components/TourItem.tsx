import { Box, Flex } from "@chakra-ui/react";
import { getRandomLink } from "../utils";
import ButtonLink from "./ButtonLink";
import React from "react";

interface Props {
  tourDate: {
    date: string;
    location: string;
  };
}

// tour date rows that get returned in the map.
const TourItem = ({ tourDate }: Props) => {
  // formatting the date for humans
  const date = new Date(tourDate.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Flex
      py="10px"
      px="75px"
      justifyContent="space-between"
      borderBottom="1px solid black"
    >
      <Box>
        <Box>{tourDate.location}</Box>
        <Box>{formattedDate}</Box>
      </Box>
      <ButtonLink to={getRandomLink()} label="GET TICKETS" blank />
    </Flex>
  );
};

export default TourItem;
