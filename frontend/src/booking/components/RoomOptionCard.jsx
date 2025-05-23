/*
  Generated on 23/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const RoomOptionCard = ({ hotelRoomOptionListDataBinding }) => {
  const { checkPermission } = useAuth();

  // Get current query parameters
  const { start_date, end_date, room_count } = useParams();

  return (
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
        <Link
          to={`/admin/hotel/${roomItem.bookingItemId}/room-option/${roomItem.id}/`}
          key={`update-${roomItem.id}`}
        >
          <Button
            size="sm"
            variant="primary"
          >
            Update Room Option
          </Button>
        </Link>,

        <Link
          to=''
          key={`delete-${roomItem.id}`}
        >
          <Button
            size="sm"
            variant="secondary"
          >
            Delete Room Option
          </Button>
        </Link>,

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
  )
};

export default RoomOptionCard;