/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const UpcomingFlightCard = ({ listUpcomingFlightOrderDataBinding,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listUpcomingFlightOrderDataBinding]}
  	isRow
  	itemsAttrs={[
          {
            id: "flightTo",
            condition: "",
            label: "Flight To",
  		  featureName: "arrivalLocation",
            editable: false
          }
  ,
          {
            id: "departureDate",
            condition: "",
            label: "Departure Date",
  		  featureName: "departureTime",
            editable: false
          }
  ]}
      itemsEvents={(upcomingFlightItem) => [
        
        <Link to={`/order/flight/${upcomingFlightItem.orderId}`}>
          <Button
            size="sm"
            variant=
                "primary"
          >
            Detail
          </Button>
        </Link>
        
        
  	]}
    />
  )	
};

export default UpcomingFlightCard;
