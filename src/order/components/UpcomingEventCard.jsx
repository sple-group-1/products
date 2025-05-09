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

const UpcomingEventCard = ({ listUpcomingEventOrderDataBinding,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listUpcomingEventOrderDataBinding]}
  	isRow
  	itemsAttrs={[
          {
            id: "eventName",
            condition: "",
            label: "Event Name",
  		  featureName: "title",
            editable: false
          }
  ,
          {
            id: "eventDate",
            condition: "",
            label: "Event Date",
  		  featureName: "createdAt",
            editable: false
          }
  ]}
      itemsEvents={(upcomingEventItem) => [
        
        <Link to={`/order/event/${upcomingEventItem.orderId}`}>
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

export default UpcomingEventCard;
