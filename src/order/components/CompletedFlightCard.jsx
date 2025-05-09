/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const CompletedFlightCard = ({ listCompletedFlightOrderDataBinding,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listCompletedFlightOrderDataBinding]}
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
      itemsEvents={(completedFlightItem) => [
        
        <Link to={`/order/flight/${completedFlightItem.orderId}`}>
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

export default CompletedFlightCard;
