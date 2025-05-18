/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
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
import updateBlog from '../services/updateBlog'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUpdateBlog = ({ 
	blogData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: blogData })
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    updateBlog({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/blog/${blogData.id}`)
  	notifySuccess(`Update Blog berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Update Blog" 
		  onSubmit={handleSubmit(save)}
	
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
		            defaultValue={blogData.title}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="content"
		        name="content"
		        control={control}
		        render={({ field, fieldState }) => (
        <RichTextField
          label="Content"
          placeholder="Masukkan content"
          defaultValue={blogData.content}
          fieldState={fieldState}
          {...field}
          isRequired={false}
        />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormUpdateBlog
