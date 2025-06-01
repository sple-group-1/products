/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const DetailFlight = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalDeleteFightConfirmation, setShowModalDeleteFightConfirmation] = React.useState(false); 
    const [showModalDeleteClassFlightConfirmation, setShowModalDeleteClassFlightConfirmation] = React.useState(false); 
    const updateFlight = async () => {
      navigate(
        '/flight/update?'
      );
    };
    
    
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "departureLocation",
          condition: "",
          label: "Departure Location",
          featureName: "departureLocation",
        }
        ,
        {
          id: "arrivalLocation",
          condition: "",
          label: "Arrival Location",
          featureName: "arrivalLocation",
        }
        ,
        {
          id: "departureTime",
          condition: "",
          label: "Departure Time",
          featureName: "departureTime",
        }
        ,
        {
          id: "arrivalTime",
          condition: "",
          label: "Arrival Time",
          featureName: "arrivalTime",
        }
        ,
        {
          id: "airline",
          condition: "",
          label: "Airline",
          featureName: "airline",
        }
        
      ]}
      itemsEvents={[
            <Button
              variant="secondary"
              onClick={() => updateFlight()}
            >
              Update Flight
            </Button>
        ,
            <Button
          variant="secondary"
          onClick={() => setShowModalDeleteFightConfirmation(true)}
        >
          Delete Flight
        </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalDeleteFightConfirmation}
           title={"Delete Fight Confirmation"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalDeleteFightConfirmation(false)}>Batal</Button></Link>
        </Modal>
        <Modal
           isShow={showModalDeleteClassFlightConfirmation}
           title={"Delete Class Flight Confirmation"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalDeleteClassFlightConfirmation(false)}>Batal</Button></Link>
        </Modal>
        
      ]}
    />
  );
};

export default DetailFlight;
