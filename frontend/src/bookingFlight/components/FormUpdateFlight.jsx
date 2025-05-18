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
  
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import updateFlight from '../services/updateFlight'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUpdateFlight = ({ 
	flightData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: flightData })
  
  
  
  
  const navigate = useNavigate()
  
  const update = (data) => {
    const cleanData = cleanFormData(data)
    updateFlight({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/flight/${flightData.id}/departurelocation/:departureLocation/arrivallocation/:arrivalLocation/departuretime/:departureTime`)
  	notifySuccess(`Update Flight berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Update Flight" 
		  onSubmit={handleSubmit(update)}
	
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
		            defaultValue={flightData.departureLocation}	            fieldState={fieldState}
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
		            defaultValue={flightData.arrivalLocation}	            fieldState={fieldState}
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
		            defaultValue={flightData.departureTime}	            fieldState={fieldState}
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
		            defaultValue={flightData.arrivalTime}	            fieldState={fieldState}
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
		            defaultValue={flightData.airline}	            fieldState={fieldState}
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

export default FormUpdateFlight
