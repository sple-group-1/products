/*
  Generated on 23/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React from 'react'
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button, Modal } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

import deleteRoomOption from '../services/deleteRoomOption';

const RoomOptionCard = ({ hotelRoomOptionListDataBinding }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();

  // Get current query parameters
  const { start_date, end_date, room_count } = useParams();

  const [showModal, setShowModal] = React.useState({
    deleteRoomOption: false,
    currentRoomOptionId: null,
  });

  const handleDeleteRoomOption = (roomOptionId) => {
    setShowModal({ deleteRoomOption: true, currentRoomOptionId: roomOptionId });
  };

  const confirmDeleteRoomOption = async () => {
    if (showModal.currentRoomOptionId) {
      await deleteRoomOption({
        id: showModal.currentRoomOptionId,
      });
      setShowModal({ deleteRoomOption: false, currentRoomOptionId: null });
      navigate(0);
    }
  };

  const cancelDeleteRoomOption = () => {
    setShowModal({ deleteRoomOption: false, currentRoomOptionId: null });
  };

  return (
    <>
      <Layouts.ListComponentCardLayout
        items={[hotelRoomOptionListDataBinding]}
        itemsAttrs={[
          {
            id: "roomType",
            condition: "",
            label: "Room Type",
            featureName: "roomType",
            editable: false
          },
          {
            id: "price",
            condition: "",
            label: "Price",
            featureName: "price",
            editable: false
          }
        ]}
        itemsEvents={(roomItem) => [
          checkPermission("UpdateRoomOption") ? (<Link
            to={`/admin/hotel/${roomItem.bookingItemId}/room-option/${roomItem.id}/`}
            key={`update-${roomItem.id}`}
          >
            <Button
              size="sm"
              variant="primary"
            >
              Update Room Option
            </Button>
          </Link>) : null
          ,

          checkPermission("DeleteRoomOption") ? (
            <Button
              size="sm"
              variant="secondary"
              key={`delete-${roomItem.id}`}
              onClick={() => handleDeleteRoomOption(roomItem.id)}
            >
              Delete Room Option
            </Button>
          ) : null,

          <Link
            to={`/hotel/${roomItem.bookingItemId}/room/${roomItem.id}/book?start_date=${start_date}&end_date=${end_date}&room_count=${room_count}`}
            key={`book-${roomItem.id}`}
          >
            <Button
              size="sm"
              variant="primary"
            >
              Book
            </Button>
          </Link>
        ]}
      />
      <Modal
        key='delete-roomoption-modal'
        isShow={showModal.deleteRoomOption}
        title={"Delete Room Option Confirmation"}
        text={"Are you sure you want to delete this room option?"}
      >
        <div className='flex flex-row justify-between gap-4'>
          <Button
            variant="tertiary"
            className="grow"
            onClick={cancelDeleteRoomOption}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="grow"
            onClick={confirmDeleteRoomOption}
          >
            Delete Room Option
          </Button>
        </div>
      </Modal>
    </>
  )
};

export default RoomOptionCard;