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
import savePackage from '../services/savePackage'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddPackageForm = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const addPackage = (data) => {
    const cleanData = cleanFormData(data)
    savePackage({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/event/${eventId}`)
  	notifySuccess(`Save Package berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Package Form" 
		  onSubmit={handleSubmit(addPackage)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key=""
		        name=""
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Package Name"
		            placeholder="Masukkan package name"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key=""
		        name=""
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Price"
		            placeholder="Masukkan price"
					type="number"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Add Package" type="submit" variant="primary">Add Package</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddPackageForm
