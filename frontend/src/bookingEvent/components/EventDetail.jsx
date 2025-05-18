/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';
import convertByteArrayToBlobUrl from '@/commons/utils/byteArrayToBlobUrl'


import * as Layouts from "@/commons/layouts";


const EventDetail = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  console.log(data)
  data.imageUrls = <img
  src={convertByteArrayToBlobUrl(data.imageUrls, "image/jpeg")}
  alt="Preview"
  className="w-full h-80 object-cover rounded-md border"
/>
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "image",
          condition: "",
          label: "Image",
          featureName: "imageUrls",
        }
        ,
        {
          id: "title",
          condition: "",
          label: "Title",
          featureName: "title",
        }
        ,
        {
          id: "location",
          condition: "",
          label: "Location",
          featureName: "location",
        }
        ,
        {
          id: "description",
          condition: "",
          label: "Description",
          featureName: "description",
        }
        ,
        {
          id: "facilities",
          condition: "",
          label: "Facilities",
          featureName: "facilities",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default EventDetail;
