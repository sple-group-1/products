/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams, useParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
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
import saveOrder from '../services/saveOrder'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormConfirmationOrderForm = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
	const {packageId} = useParams()
  
  
  const navigate = useNavigate()
  
  const placeOrder = (data) => {
    const cleanData = cleanFormData(data)
    saveOrder({
      ...cleanData,
	  bookingOptionId:packageId
	  
    })
    .then(({ data: { data } }) => {
	navigate(`/order`)
	notifySuccess(`Save Order berhasil!`);

    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Confirmation Order Form" 
		  onSubmit={handleSubmit(placeOrder)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="startDate"
		        name="startDate"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="start Date"
		            placeholder="Masukkan start Date"
					type="date"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="quantity"
		        name="quantity"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="quantity"
		            placeholder="Masukkan quantity"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Place Order" type="submit" variant="primary">Place Order</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormConfirmationOrderForm
