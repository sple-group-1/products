/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const FlightCard = ({ listFlightDataBinding,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listFlightDataBinding]}
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
      itemsEvents={(flightItem) => [
        
        <Link to={`/order/flight/${id}`}>
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

export default FlightCard;
