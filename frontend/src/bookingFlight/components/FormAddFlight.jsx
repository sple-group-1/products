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
import addFlight from '../services/addFlight'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddFlight = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const add = (data) => {
    const cleanData = cleanFormData(data)
    addFlight({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/flight/${departureTime}`)
  	notifySuccess(`Add Flight berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Flight" 
		  onSubmit={handleSubmit(add)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="departureLocation"
		        name="departureLocation"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Departure Location"
		            placeholder="Masukkan departure location"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="arrivalLocation"
		        name="arrivalLocation"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Arrival Location"
		            placeholder="Masukkan arrival location"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="departureTime"
		        name="departureTime"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Departure Time"
		            placeholder="Masukkan departure time"
					type="date"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="arrivalTime"
		        name="arrivalTime"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Arrival Time"
		            placeholder="Masukkan arrival time"
					type="date"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="airline"
		        name="airline"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Airline"
		            placeholder="Masukkan airline"
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

export default FormAddFlight
