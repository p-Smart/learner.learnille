import React from 'react'
import { 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    TabIndicator, 
} from '@chakra-ui/react'

const TabsView = ({tab, view}) => {
  return (
    <Tabs position='relative' isFitted variant='unstyled' mt='1rem'>
        <TabList>
            { tab && (
                tab.map((item,index) => ( 
                  <Tab key={index} fontWeight='bold' _selected={{ color: 'brand.grey.400', bg: 'brand.white' }}>
                    {item}
                  </Tab>
                ))
            )}
        </TabList>
        <TabIndicator mt='0px' height='2px' bg='brand.primary' borderRadius='1px' />
        <TabPanels>
            { view && (
              view.map((content,index) => (
                <TabPanel key={index}>
                  {content}
                </TabPanel>
              ))
            )}
        </TabPanels>
    </Tabs>
  )
}

export default TabsView