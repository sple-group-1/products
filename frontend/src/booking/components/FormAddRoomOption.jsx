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
import addRoomOption from '../services/addRoomOption'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddRoomOption = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const add = (data) => {
    const cleanData = cleanFormData(data)
    addRoomOption({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/hotel/${rooms_count}`)
  	notifySuccess(`Add Room Option berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Room Option" 
		  onSubmit={handleSubmit(add)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="roomType"
		        name="roomType"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Room Type"
		            placeholder="Masukkan room type"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="price"
		        name="price"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Price"
		            placeholder="Masukkan price"
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

export default FormAddRoomOption
