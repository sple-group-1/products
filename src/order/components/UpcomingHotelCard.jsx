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

const UpcomingHotelCard = ({ listUpcomingHotelOrderDataBinding,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listUpcomingHotelOrderDataBinding]}
  	isRow
  	itemsAttrs={[
          {
            id: "hotelName",
            condition: "",
            label: "Hotel Name",
  		  featureName: "bookingOptionBookingItemTitle",
            editable: false
          }
  ,
          {
            id: "check-InDate",
            condition: "",
            label: "Check-In Date",
  		  featureName: "startDate",
            editable: false
          }
  ]}
      itemsEvents={(upcomingHotelItem) => [
        
        <Link to={`/order/hotel/${upcomingHotelItem.orderId}`}>
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

export default UpcomingHotelCard;
