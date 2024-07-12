import React from 'react';
import TabsView from '../../utility/Tabs';
import ConsultionCard from '../../cards/ConsultionCard';
import { Grid, GridItem } from '@chakra-ui/react'
import CourseCard from '../../cards/CourseCard';

const tabOptions = [
  'Courses', 'Consultations'
];

const Courses = () => (
  <Grid templateColumns='repeat(auto-fit, minmax(300px, 1fr))' gap='1rem'>
      <GridItem>
        <CourseCard/>
      </GridItem>
      <GridItem>
        <CourseCard/>
      </GridItem>
      <GridItem>
        <CourseCard/>
      </GridItem>
      <GridItem>
        <CourseCard/>
      </GridItem>
      <GridItem>
        <CourseCard/>
      </GridItem>
  </Grid>
);

const Consultation = () => (  
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="1rem">
        <GridItem>
          <ConsultionCard />
        </GridItem>
        <GridItem>
          <ConsultionCard />
        </GridItem>
        <GridItem>
          <ConsultionCard />
        </GridItem>
        <GridItem>
          <ConsultionCard />
        </GridItem>
        <GridItem>
          <ConsultionCard />
        </GridItem>
    </Grid>
);

const tabView = [
  <Courses key="courses" />, <Consultation key="consultation" />
];

const MarketPlace = () => {
  return (
    <TabsView tab={tabOptions} view={tabView} />
  );
}

export default MarketPlace;
