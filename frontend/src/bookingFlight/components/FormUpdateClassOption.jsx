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
import updateClassOption from '../services/updateClassOption'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUpdateClassOption = ({ 
	classOptionData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: classOptionData })
  
  
  
  
  const navigate = useNavigate()
  
  const update = (data) => {
    const cleanData = cleanFormData(data)
    updateClassOption({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/flight/${classOptionData.invalid}/departurelocation/:departureLocation/arrivallocation/:arrivalLocation/departuretime/:departureTime`)
  	notifySuccess(`Update Class Option berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Update Class Option" 
		  onSubmit={handleSubmit(update)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="class"
		        name="class"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Class Type"
		            placeholder="Masukkan class type"
		            defaultValue={classOptionData.class}	            fieldState={fieldState}
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
		            defaultValue={classOptionData.price}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Update" type="submit" variant="primary">Update</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormUpdateClassOption
