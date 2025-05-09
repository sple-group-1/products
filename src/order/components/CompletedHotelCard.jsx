/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const CompletedHotelCard = ({ listCompletedHotelOrderDataBinding,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listCompletedHotelOrderDataBinding]}
  	isRow
  	itemsAttrs={[
          {
            id: "hotelName",
            condition: "",
            label: "Hotel Name",
  		  featureName: "title",
            editable:  false 
          }
  ,
          {
            id: "check-InDate",
            condition: "",
            label: "Check-In Date",
  		  featureName: "createdAt",
            editable:  false 
          }
  ]}
      itemsEvents={(completedHotelItem) => [
        <Link to={`/order/hotel/${completedHotelItem.orderId}`}>
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

export default CompletedHotelCard;
