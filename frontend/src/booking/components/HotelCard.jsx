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

const HotelCard = ({ listHotelDataBinding,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listHotelDataBinding]}
  	isRow
  	itemsAttrs={[
          {
            id: "title",
            condition: "",
            label: "Title",
  		  featureName: "title",
            editable: false
          }
  ,
          {
            id: "startPrice",
            condition: "",
            label: "Start Price",
  		  featureName: "price",
            editable: false
          }
  ,
          {
            id: "location",
            condition: "",
            label: "Location",
  		  featureName: "location",
            editable: false
          }
  ]}
      itemsEvents={(hotelItem) => [
        
        <Link to={`/hotel/${hotelItem.id}/start_date/:start_date/end_date/:end_date/rooms_count/:rooms_count`}>
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

export default HotelCard;
