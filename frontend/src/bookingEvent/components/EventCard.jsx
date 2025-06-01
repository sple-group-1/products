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

const EventCard = ({ listEventDataBinding,
		 

	}) => {
  const { checkPermission } = useAuth();
  const {  } = useParams()
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listEventDataBinding]}
  	isRow
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
        
        <Link to={`/event/${eventId}`}>
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
