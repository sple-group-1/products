/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router";
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

import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormSearchHotelForm = ({ }) => {
	const {
		control,
		handleSubmit,
		watch,
	} = useForm({
		defaultValues: {
			keyword: "",
			startDate: "",
			endDate: "",
			roomCount: ""
		}
	});

	const navigate = useNavigate();

	// Watch all form values
	const formValues = watch();

	const submit = (data) => {
		const cleanData = cleanFormData(data);
		navigate(`/hotel?keyword=${data.keyword || ''}&start_date=${data.startDate || ''}&end_date=${data.endDate || ''}&room_count=${data.roomCount || ''}`);
	}

	return (
		<div>
			<Layouts.FormComponentLayout
				title="Search Hotel Form"
				onSubmit={handleSubmit(submit)}
				vas={[]}
				formFields={[
					<Controller
						key="keyword"
						name="keyword"
						control={control}
						render={({ field, fieldState }) => (
							<InputField
								label="Keyword"
								placeholder="Masukkan keyword"
								fieldState={fieldState}
								{...field}
								isRequired={false}
							/>
						)}
					/>,
					<Controller
						key="startDate"
						name="startDate"
						control={control}
						render={({ field, fieldState }) => (
							<InputField
								label="Tanggal Check In"
								placeholder="Masukkan tanggal check in"
								type="date"
								fieldState={fieldState}
								{...field}
								isRequired={false}
							/>
						)}
					/>,
					<Controller
						key="endDate"
						name="endDate"
						control={control}
						render={({ field, fieldState }) => (
							<InputField
								label="Tanggal Check Out"
								placeholder="Masukkan tanggal check out"
								type="date"
								fieldState={fieldState}
								{...field}
								isRequired={false}
							/>
						)}
					/>,
					<Controller
						key="roomCount"
						name="roomCount"
						control={control}
						render={({ field, fieldState }) => (
							<InputField
								label="Jumlah Kamar"
								placeholder="Masukkan jumlah kamar"
								type="number"
								fieldState={fieldState}
								{...field}
								isRequired={false}
							/>
						)}
					/>,
				]}
				itemsEvents={[
					<Button key="submit-button" type="submit" variant="primary">
						Search
					</Button>
				]}
			/>
		</div>
	)
}

export default FormSearchHotelForm