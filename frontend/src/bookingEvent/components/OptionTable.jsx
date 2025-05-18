/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
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
  
  
  
    const {packageId} = useParams()

  	const { eventId,  } = useParams();
  const navigate = useNavigate();
  const detail = async (optionItem) => {
    isMobile() && navigate(`/event/:eventId/package/${optionItem.packageId}`
    );
  };
  const [showModalDeleteEventConfirmation, setShowModalDeleteEventConfirmation] = React.useState(false);
  
  
  
  	
    const handleDeleteEvent = async (selectedDeleteEventConfirmation) => {
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
          },
          {
            id: "price",
            condition: "isCurrency",
            label: "Price",
            featureName: "price",
            editable: false
          }
        ]}
        itemsEvents={(optionItem) => {

          const selectedPackage = listPackageDataBinding.find(
            (item) => item.id === optionItem.id
          );

          const handleDetailClick = () => {
            if (selectedPackage?.packageId) {
              navigate(`/event/${eventId}/package/${selectedPackage.packageId}`);
            } else {
              console.warn("packageId tidak ditemukan untuk item:", optionItem);
            }
  };

        return [
          <Button
            key="detail"
            size="sm"
            variant="primary"
            onClick={handleDetailClick} // panggil detail dengan index
          >
            Detail
          </Button>,
          // <Button
          //   key="delete"
          //   size="sm"
          //   variant="danger"
          //   onClick={() => setShowModalDeleteEventConfirmation(true)}
          // >
          //   Delete
          // </Button>,
        ];
      }}
        itemsModals={(row) => [
          <Modal
            key="modal-delete"
            isShow={showModalDeleteEventConfirmation}
            title={"Delete Event Confirmation"}
          >
            <Link to="">
              <Button
                className="w-full mb-2"
                variant="tertiary"
                onClick={() => setShowModalDeleteEventConfirmation(false)}
              >
                Batal
              </Button>
            </Link>
            <Button
              variant="secondary"
              onClick={handleDeleteEvent}
            >
              Delete Event
            </Button>
          </Modal>
        ]}
      />
    </>
);
};

export default OptionTable;
