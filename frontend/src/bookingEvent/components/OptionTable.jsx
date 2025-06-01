/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';


import deleteEvent from '../services/deleteEvent'

import * as Layouts from "@/commons/layouts";

const OptionTable = ({ listPackageDataBinding,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  	const { eventId,  } = useParams();
  const navigate = useNavigate();
  const detail = async (optionItem) => {
    isMobile() && navigate(`/event/:eventId/package/${packageId}`
    );
  };
  
  const [showModalDeleteEventConfirmation, setShowModalDeleteEventConfirmation] = React.useState(false);
  
  
  
  	
    const deleteEvent = async (selectedDeleteEventConfirmation) => {
      await deleteEvent({
        eventId: selectedDeleteEventConfirmation.eventId,
      });
  		navigate('/event');
    }
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listPackageDataBinding]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "packageName",
            condition: "",
            label: "Package Name",
  		  featureName: "packageName",
            editable: false
          }
  ,
          {
            id: "price",
            condition: "",
            label: "Price",
  		  featureName: "price",
            editable: false
          }
  ]}
        itemsEvents={(optionItem) => [
          
          <Link to={`/event/:eventId/package/${packageId}`}>
            <Button
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
  	/>
  		<Modal
  		isShow={showModalDeleteEventConfirmation}
  		title={"Delete Event Confirmation"}
  		>
  		
  		
  		
  		
  		
  				<Link to=''><Button className={`w-full`} variant="tertiary" onClick={() => setShowModalDeleteEventConfirmation(false)}>Batal</Button></Link>
  		
  		<Button
  		  variant="primary"
  		  onClick={() => deleteEvent(selectedDeleteEventConfirmation)}
  		>
  		  Delete
  		</Button>
  		</Modal>
  		
  </>
  )
};

export default OptionTable;
