/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
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
          featureName: "bookingOptionEventTitle",
        }
        ,
        {
          id: "packageName",
          condition: "",
          label: "Package Name",
          featureName: "bookingOptionPackageName",
        }
        ,
        {
          id: "location",
          condition: "",
          label: "Location",
          featureName: "bookingOptionEventLocation",
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
          id: "totalPrice",
          condition: "",
          label: "Total Price",
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
