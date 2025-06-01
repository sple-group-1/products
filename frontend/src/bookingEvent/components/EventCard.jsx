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
import convertByteArrayToBlobUrl from '@/commons/utils/byteArrayToBlobUrl'

const EventCard = ({ listEventDataBinding,
		 

	}) => {
  const { checkPermission } = useAuth();
  const {  } = useParams()
  const detail = async (eventItem) => {
    isMobile() && navigate(`/event/${eventItem.id}`
    );
  };
  
const processedItems = listEventDataBinding.map(item => ({
  ...item,
  imageUrls: (
    <img
      src={convertByteArrayToBlobUrl(item.imageUrls)}
      alt="Preview"
      className="w-full h-80 object-cover rounded-md border"
    />
  )
}));
  return (
    <Layouts.ListComponentCardLayout
      items={[processedItems]}
  	isRow
    detail={detail}
  	isSearchable
  	itemsAttrs={[
          {
            id: "image",
            condition: "",
            label: "Image",
  		  featureName: "imageUrls",
            editable: false
          }
  ,
          {
            id: "title",
            condition: "",
            label: "Title",
  		  featureName: "title",
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
  itemsEvents={(eventItem) => [
          <Link to={`/event/${eventItem.eventId}`}>
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

export default EventCard;
