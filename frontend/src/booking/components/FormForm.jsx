/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
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
import updateRoomOptionAvailability from '../services/updateRoomOptionAvailability'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormForm = ({ 
	roomOptionAvailabilityData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: roomOptionAvailabilityData })
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    updateRoomOptionAvailability({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/admin/hotel/${roomOptionAvailabilityData.hotelIdroomId}/room-option/:roomId/availability`)
  	notifySuccess(`Update Room Option Availability berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Form" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="available"
		        name="available"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Available"
		            placeholder="Masukkan available"
					type="number"
		            defaultValue={roomOptionAvailabilityData.available}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="quota"
		        name="quota"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Quota"
		            placeholder="Masukkan quota"
					type="number"
		            defaultValue={roomOptionAvailabilityData.quota}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormForm
