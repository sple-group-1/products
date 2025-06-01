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
  FileInputField,
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import updateEvent from '../services/updateEvent'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUpdateEventForm = ({ 
	eventData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: eventData })
  
  
  
  
  const navigate = useNavigate()
  
  const updateEvent = (data) => {
    const cleanData = cleanFormData(data)
    updateEvent({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/event/${eventData.eventId}`)
  	notifySuccess(`Update Event berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Update Event Form" 
		  onSubmit={handleSubmit(updateEvent)}
	
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
		            defaultValue={eventData.title}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="description"
		        name="description"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Description"
		            placeholder="Masukkan description"
		            defaultValue={eventData.description}	            fieldState={fieldState}
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
		            defaultValue={eventData.location}	            fieldState={fieldState}
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
				  <InputField
		            label="Facilities"
		            placeholder="Masukkan facilities"
		            defaultValue={eventData.facilities}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			    
				<Controller
					key="imageUrls"
					name="imageUrls"
					control={control}
					render={({ field, fieldState }) => (
				    <FileInputField
				      label="Image"
				      placeholder="Masukkan image"
				      defaultValue={eventData.imageUrls}
					  	fieldState={fieldState}
						  {...field}
						  isRequired={false}
				    />
				  )}
				/>
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Update Event" type="submit" variant="primary">Update Event</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormUpdateEventForm
