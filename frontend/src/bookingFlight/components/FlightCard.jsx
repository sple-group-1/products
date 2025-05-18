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

const FlightCard = ({ listFlightDataBinding,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listFlightDataBinding]}
  	isRow
  	itemsAttrs={[
          {
            id: "departureLocation",
            condition: "",
            label: "Departure Location",
  		  featureName: "departureLocation",
            editable: false
          }
  ,
          {
            id: "arrivalLocation",
            condition: "",
            label: "Arrival Location",
  		  featureName: "arrivalLocation",
            editable: false
          }
  ,
          {
            id: "departureTime",
            condition: "",
            label: "Departure Time",
  		  featureName: "departureTime",
            editable: false
          }
  ,
          {
            id: "airline",
            condition: "",
            label: "Airline",
  		  featureName: "airline",
            editable: false
          }
  ]}
      itemsEvents={(flightItem) => [
        
        <Link to={``}>
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
