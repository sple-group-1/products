/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteEvent from '../services/deleteEvent';

import * as Layouts from "@/commons/layouts";
import convertByteArrayToBlobUrl from '@/commons/utils/byteArrayToBlobUrl'


const DetailEvent = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalDeleteEventConfirmation, setShowModalDeleteEventConfirmation] = React.useState(false); 
    const edit = async () => {
      navigate(
        '/event/update?'
        + `eventId=${data.eventId}`
        
      );
    };
    
  data.imageUrls = <img
  src={convertByteArrayToBlobUrl(data.imageUrls, "image/png")}
  alt="Preview"
  className="w-full h-80 object-cover rounded-md border"
/>
  
    const handleDeleteEvent = async () => {
      await deleteEvent({
        eventId: data.eventId,
      });
      navigate('/event');
    };
  
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
        checkPermission("UpdateEvent") && (
            <Button
              variant="secondary"
              onClick={() => edit()}
            >
              Edit
            </Button>
            )
        ,
        checkPermission("DeleteEvent") && (
            <Button
          variant="danger"
          onClick={() => setShowModalDeleteEventConfirmation(true)}
        >
          Delete Event
        </Button>
        )
      ]}
      itemsModals={[
        <Modal
           isShow={showModalDeleteEventConfirmation}
           title={"Delete Event Confirmation"}
        >
           <Link to=''><Button className="w-full mb-2" variant="tertiary" onClick={() => setShowModalDeleteEventConfirmation(false)}>Batal</Button></Link>
          <Button
          
            variant="danger"
            onClick={() => handleDeleteEvent()}
          >
            Delete Event
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default DetailEvent;
