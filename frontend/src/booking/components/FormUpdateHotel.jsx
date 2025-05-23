/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
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
import updateHotel from '../services/updateHotel'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUpdateHotel = ({ 
	hotelData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: hotelData })
  
  
  
  
  const navigate = useNavigate()
  
  const onSubmitEvent = (data) => {
    const cleanData = cleanFormData(data)
    updateHotel({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/hotel/${hotelData.id}`)
  	notifySuccess(`Update Hotel berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Update Hotel" 
		  onSubmit={handleSubmit(onSubmitEvent)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="title"
		        name="title"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Title"
		            placeholder="Masukkan title"
		            defaultValue={hotelData.title}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="imageUrl"
		        name="imageUrl"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Image URL"
		            placeholder="Masukkan image url"
		            defaultValue={hotelData.imageUrl}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="location"
		        name="location"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Location"
		            placeholder="Masukkan location"
		            defaultValue={hotelData.location}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="facilities"
		        name="facilities"
		        control={control}
		        render={({ field, fieldState }) => (
				  <RichTextField
		            label="Facilities"
		            placeholder="Masukkan facilities"
		            defaultValue={hotelData.facilities}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="OnSubmit Event" type="submit" variant="primary">OnSubmit Event</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormUpdateHotel
