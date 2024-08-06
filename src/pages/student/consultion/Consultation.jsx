import React from 'react'
import MainLayout from '../../../components/layout/MainLayout'
import ConsultantPageLayout from '../../../components/layout/ConsultantPageLayout'
import TabsView from '../../../components/utility/Tabs';
import OnGoing from './part/OnGoing';
import Completed from './part/Completed.jsx';

const tabOptions = [
  'Ongoing course', 'Completed course'
];

const tabView = [
  <OnGoing key="ongoing"/>, <Completed key="completed" />
];


const Consultation = () => {
  return (
    <MainLayout>
        <ConsultantPageLayout>
          <TabsView tab={tabOptions} view={tabView}/>
        </ConsultantPageLayout>
    </MainLayout>
  )
}

export default Consultation