
import React from 'react'
import { Grid,
         GridItem
} from '@chakra-ui/react'
import MyCourseCard from '../../../../../components/cards/MyCourseCard'


const Completed = () => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(260px, 1fr))" gap=".5rem">
        <GridItem>
            <MyCourseCard hasCompleted={true}/>
      </GridItem>
        <GridItem>
            <MyCourseCard hasCompleted={true}/>
      </GridItem>
        <GridItem>
            <MyCourseCard hasCompleted={true}/>
      </GridItem>
        <GridItem>
            <MyCourseCard hasCompleted={true}/>
        </GridItem>
        <GridItem>
            <MyCourseCard hasCompleted={true}/>
      </GridItem>
        <GridItem>
            <MyCourseCard hasCompleted={true}/>
        </GridItem>
    </Grid>
  )
}

export default Completed
