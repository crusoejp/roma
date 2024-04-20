import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TourItem from "../Components/TourItem";
import { TourDate, mockApiUrl } from "../utils";
import ButtonLink from "../Components/ButtonLink";
import Title from "../Components/Title";

// the tour page, showing tour dates and a button to request a show.
const Tour = () => {
  const [tour, setTour] = useState<TourDate[]>([]);

  // READ - Fetch tour dates from mock API
  const getTourDates = async () => {
    const res = await fetch(`${mockApiUrl}/tour_date`, {
      method: "GET",
    });

    const data = await res.json();

    setTour(data);
  };

  useEffect(() => {
    getTourDates();
  }, []);

  return (
    <Box minH="85vh" color="black" bgColor="white" p="2%">
      <Title label="UPCOMING TOUR DATES" />
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
