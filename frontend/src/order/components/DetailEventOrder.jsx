/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const DetailEventOrder = ({ data }) => {
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
          id: "eventName",
          condition: "",
          label: "Event Name",
          featureName: "bookingOptionBookingItemTitle",
        }
        ,
        {
          id: "location",
          condition: "",
          label: "Location",
          featureName: "bookingOptionBookingItemLocation",
        }
        ,
        {
          id: "eventDate",
          condition: "",
          label: "Event Date",
          featureName: "startDate",
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

export default DetailEventOrder;
