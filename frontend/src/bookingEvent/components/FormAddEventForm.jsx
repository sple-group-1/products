/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
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
import saveEvent from '../services/saveEvent'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddEventForm = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const addEvent = (data) => {
    const cleanData = cleanFormData(data)
    saveEvent({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/event`)
  	notifySuccess(`Save Event berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Event Form" 
		  onSubmit={handleSubmit(addEvent)}
	
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
		            fieldState={fieldState}
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
		            fieldState={fieldState}
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
		            fieldState={fieldState}
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
		            fieldState={fieldState}
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
					  	fieldState={fieldState}
						  {...field}
						  isRequired={false}
				    />
				  )}
				/>
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Add Event" type="submit" variant="primary">Add Event</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddEventForm
