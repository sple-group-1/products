/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { Tab } from '@/commons/components'
import UpcomingOrders from '../containers/UpcomingOrders.jsx'
import CompletedOrders from '../containers/CompletedOrders.jsx'


const WrapperTab = () => {
  
  return (
    <Tab
      tabs={[
        {
          id: 'UpcomingOrders',
          name: 'Upcoming Orders',
          children: <UpcomingOrders />
        }
    ,
        {
          id: 'CompletedOrders',
          name: 'Completed Orders',
          children: <CompletedOrders />
        }
      ]}
      id='0'
    />
  );
};

export default WrapperTab;
