/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteHotel from '../services/deleteHotel';
import deleteRoomOption from '../services/deleteRoomOption';

import * as Layouts from "@/commons/layouts";


const DetailHotel = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const updateHotel = async () => {
      navigate(
        '/admin/hotel/:id/update?'
      );
    };
    
    
  
    const confirmDeleteHotel = async () => {
      await deleteHotel({
      });
      navigate('/hotel/search/keyword/:keyword/start_date/:start_date/end_date/:end_date/rooms_count/:rooms_count');
    };
    const confirmDeleteRoomOption = async () => {
      await deleteRoomOption({
      });
      navigate('/hotel/:id/start_date/:start_date/end_date/:end_date/rooms_count/:rooms_count');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "title",
          condition: "",
          label: "Title",
          featureName: "invalid",
        }
        ,
        {
          id: "image",
          condition: "",
          label: "Image",
          featureName: "invalid",
        }
        ,
        {
          id: "location",
          condition: "",
          label: "Location",
          featureName: "invalid",
        }
        ,
        {
          id: "facilities",
          condition: "",
          label: "Facilities",
          featureName: "invalid",
        }
        
      ]}
      itemsEvents={[
            <Button
              variant="secondary"
              onClick={() => updateHotel()}
            >
              Update Hotel
            </Button>
        ,
            <Button
          variant="secondary"
          onClick={() => deleteHotel()}
        >
          Delete Hotel
        </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailHotel;
