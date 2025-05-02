/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import CartItemCard from "../components/CartItemCard"
import saveOrder from '../services/saveOrder'


import { notifyError,notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const CartItemCardForm = ({ 
	dataBinding
	, edited
	, itemId
	, handleChange
	, selectedItems
	, setSelectedItems
	, isLoading }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  const navigate = useNavigate()
  const isCheckboxInvalid = selectedItems.length === 0;
  
  const checkout = (data) => {
  if (isCheckboxInvalid) {
  	notifyError("Harus ada minimal satu item yang dipilih.");
  	return;
  }
    saveOrder({
  		data: selectedItems
    })
    .then(({ data: { data } }) => {
      navigate(`/cart`)
  	notifySuccess(`Save Order berhasil!`);
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
    <Layouts.BatchUpdateFormComponentLayout
  	  onSubmit={handleSubmit()}
  
  	  formFields={<Layouts.ListContainerTableLayout
  	  	title={"ListRow CartItem"}
  	  	singularName={"CartItem"}
  	  	items={[dataBinding]}
  	  	isLoading={isLoading}
  	  >
  	  	<CartItemCard
  	  		itemId={itemId}
  	  		handleChange={handleChange}
  	  		selectedItems={selectedItems}
  	  		setSelectedItems={setSelectedItems}
  	  		dataBinding={dataBinding}
  	  		
  	  	/>
  	  </Layouts.ListContainerTableLayout>}
  
  	  itemsEvents={[
  			
      ]}
    />
  
  
  )
}

export default CartItemCardForm
