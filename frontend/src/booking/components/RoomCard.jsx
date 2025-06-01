/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const RoomCard = ({ roomOptionAvailabilityData,
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[roomOptionAvailabilityData]}
  	
  	itemsAttrs={[
          {
            id: "available",
            condition: "",
            label: "Available",
  		  featureName: "available",
            editable: false
          }
  ,
          {
            id: "quota",
            condition: "",
            label: "Quota",
  		  featureName: "quota",
            editable: false
          }
  ,
          {
            id: "date",
            condition: "",
            label: "Date",
  		  featureName: "date",
            editable: false
          }
  ]}
      itemsEvents={(roomItem) => [
        
        <Link to={`/admin/hotel/${hotelId}/room-option/${roomId}/availability/${roomItem.id}`}>
          <Button
            size="sm"
            variant=
                "primary"
          >
            Update Room Option Availability
          </Button>
        </Link>
        
        
  ,
        
  <Link to=''>
    <Button
      size="sm"
      variant=
                  "secondary"
    >
      Delete Room Availability
    </Button>
  </Link>
  
  
  	]}
    />
  )	
};

export default RoomCard;
