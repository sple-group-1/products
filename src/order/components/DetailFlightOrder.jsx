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
          featureName: "bookingOptionName",
        }
        ,
        {
          id: "departureLocation",
          condition: "",
          label: "Departure Location",
          featureName: "bookingOptionBookingItemDepartureLocation",
        }
        ,
        {
          id: "departureTime",
          condition: "",
          label: "Departure Time",
          featureName: "bookingOptionBookingItemDepartureTime",
        }
        ,
        {
          id: "arrivalLocation",
          condition: "",
          label: "Arrival Location",
          featureName: "bookingOptionBookingItemArrivalLocation",
        }
        ,
        {
          id: "arrivalTime",
          condition: "",
          label: "Arrival Time",
          featureName: "bookingOptionBookingItemArrivalTime",
        }
        ,
        {
          id: "ticketQuantity",
          condition: "",
          label: "Ticket Quantity",
          featureName: "quantity",
        }
        ,
        {
          id: "totalPayment",
          condition: "",
          label: "Total Payment",
          featureName: "totalPrice",
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
