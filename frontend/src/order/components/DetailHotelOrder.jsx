/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const DetailHotelOrder = ({ data }) => {
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
          id: "hotelName",
          condition: "",
          label: "Hotel Name",
          featureName: "title",
        }
        ,
        {
          id: "location",
          condition: "",
          label: "Location",
          featureName: "location",
        }
        ,
        {
          id: "roomType",
          condition: "",
          label: "Room Type",
          featureName: "name",
        }
        ,
        {
          id: "check-InDate",
          condition: "",
          label: "Check-In Date",
          featureName: "createdAt",
        }
        ,
        {
          id: "check-OutDate",
          condition: "",
          label: "Check-Out Date",
          featureName: "createdAt",
        }
        ,
        {
          id: "roomQuantity",
          condition: "",
          label: "Room Quantity",
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

export default DetailHotelOrder;
