import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TourItem from "../Components/TourItem";
import { TourDate } from "../utils";
import ButtonLink from "../Components/ButtonLink";

const Tour = () => {
  const [tour, setTour] = useState<TourDate[]>([]);

  // READ - Fetch tour dates from mock API
  const getTourDates = async () => {
    const res = await fetch(
      "https://66234bc83e17a3ac846ef8b2.mockapi.io/tour_date",
      {
        method: "GET",
      }
    );

    const data = await res.json();

    setTour(data);
  };

  useEffect(() => {
    getTourDates();
  }, []);

  return (
    <Box minH="85vh" color="black" bgColor="white" p="2%">
      <Box
        fontSize="36px"
        fontFamily="monospace"
        w="100%"
        borderBottom="1px solid black"
      >
        UPCOMING TOUR DATES
      </Box>
      {tour.map((t) => (
        <TourItem key={t.date} tourDate={t} />
      ))}
      <Flex mt="30px" w="100%" justifyContent="center">
        <ButtonLink to="/contact-us" label="Request A Show" width="250px" />
      </Flex>
    </Box>
  );
};

export default Tour;
