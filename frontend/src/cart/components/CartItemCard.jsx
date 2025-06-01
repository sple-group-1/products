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

const CartItemCard = ({ dataBinding,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[dataBinding]}
  	isRow
  	itemsAttrs={[
          {
            id: "qty",
            condition: "",
            label: "Qty",
  		  featureName: "quantity",
            editable: false
          }
  ,
          {
            id: "startDate",
            condition: "",
            label: "Start Date",
  		  featureName: "startDate",
            editable: false
          }
  ,
          {
            id: "endDate",
            condition: "",
            label: "End Date",
  		  featureName: "endDate",
            editable: false
          }
  ,
          {
            id: "amount",
            condition: "",
            label: "Amount",
  		  featureName: "amount",
            editable: false
          }
  ,
          {
            id: "id",
            condition: "",
            label: "Id",
  		  featureName: "id",
            editable: false
          }
  ]}
      itemsEvents={(cartItemItem) => [
  	]}
    />
  )	
};

export default CartItemCard;
