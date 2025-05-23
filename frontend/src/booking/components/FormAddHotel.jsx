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
import addHotel from '../services/addHotel'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddHotel = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const add = (data) => {
    const cleanData = cleanFormData(data)
    addHotel({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/hotel/${id}`)
  	notifySuccess(`Add Hotel berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Hotel" 
		  onSubmit={handleSubmit(add)}
	
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
			    key="imageUrl"
		        name="imageUrl"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="imageUrl"
		            placeholder="Masukkan imageurl"
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
				  <RichTextField
		            label="Facilities"
		            placeholder="Masukkan facilities"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Add" type="submit" variant="primary">Add</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddHotel
