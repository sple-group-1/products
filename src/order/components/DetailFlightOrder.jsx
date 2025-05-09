/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const DetailFlightOrder = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "orderCreatedAt",
          condition: "",
          label: "Order Created At",
          featureName: "createdAt",
        }
        ,
        {
          id: "airlineName",
          condition: "",
          label: "Airline Name",
          featureName: "name",
        }
        ,
        {
          id: "departureLocation",
          condition: "",
          label: "Departure Location",
          featureName: "departureLocation",
        }
        ,
        {
          id: "departureTime",
          condition: "",
          label: "Departure Time",
          featureName: "departureTime",
        }
        ,
        {
          id: "arrivalLocation",
          condition: "",
          label: "Arrival Location",
          featureName: "arrivalLocation",
        }
        ,
        {
          id: "arrivalTime",
          condition: "",
          label: "Arrival Time",
          featureName: "arrivalTime",
        }
        ,
        {
          id: "ticketQuantity",
          condition: "",
          label: "Ticket Quantity",
          featureName: "amount",
        }
        ,
        {
          id: "totalPayment",
          condition: "",
          label: "Total Payment",
          featureName: "amount",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailFlightOrder;
