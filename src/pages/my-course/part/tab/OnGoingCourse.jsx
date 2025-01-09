import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import MyCourseCard from "../../../../components/cards/MyCourseCard";

const OnGoing = () => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(260px, 1fr))" gap=".5rem">
      <GridItem>
        <MyCourseCard />
      </GridItem>
      <GridItem>
        <MyCourseCard />
      </GridItem>
      <GridItem>
        <MyCourseCard />
      </GridItem>
      <GridItem>
        <MyCourseCard />
      </GridItem>
      <GridItem>
        <MyCourseCard />
      </GridItem>
      <GridItem>
        <MyCourseCard />
      </GridItem>
    </Grid>
  );
};

export default OnGoing;
