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

const ClassCard = ({ flightClassOptionListDataBinding,
		 
		 
		 
		 

	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[flightClassOptionListDataBinding]}
  	
  	itemsAttrs={[
          {
            id: "class",
            condition: "",
            label: "Class",
  		  featureName: "class",
            editable: false
          }
  ,
          {
            id: "price",
            condition: "",
            label: "Price",
  		  featureName: "price",
            editable: false
          }
  ]}
      itemsEvents={(classItem) => [
        
        <Link to={``}>
          <Button
            size="sm"
            variant=
                "primary"
          >
            Book Flight
          </Button>
        </Link>
        
        
  ,
        
  
  
  ,
        
  <Link to={`/flight/:id/classoption/update`}>
    <Button
      size="sm"
      variant=
          "primary"
    >
      Update Class Option
    </Button>
  </Link>
  
  
  ,
        
  <Link to=''>
    <Button
      size="sm"
      variant=
                  "secondary"
      onClick={() => {
        setSelectedDeleteClassFlightConfirmation(classItem);
        setShowModalDeleteClassFlightConfirmation(true);
      }}
    >
      Delete Class Option
    </Button>
  </Link>
  
  
  	]}
    />
  )	
};

export default ClassCard;
