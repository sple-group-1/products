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
import updatePackage from '../services/updatePackage'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUpdatePackageForm = ({ 
	packageData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: packageData })
  
  
  
  
  const navigate = useNavigate()
  
  const updatePackage = (data) => {
    const cleanData = cleanFormData(data)
    updatePackage({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/event/${packageData.packageId}/package/:packageId`)
  	notifySuccess(`Update Package berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Update Package Form" 
		  onSubmit={handleSubmit(updatePackage)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="packageName"
		        name="packageName"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Package Name"
		            placeholder="Masukkan package name"
		            defaultValue={packageData.packageName}	            fieldState={fieldState}
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
					type="number"
		            defaultValue={packageData.price}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Update Package" type="submit" variant="primary">Update Package</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormUpdatePackageForm
