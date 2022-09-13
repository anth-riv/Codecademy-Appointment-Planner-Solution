import React from "react";
import { Tile } from "../../components/tile/Tile"

export const TileList = ({contacts, appointment}) => {
  const rendering = () => {
    if(contacts) {
      return contacts.map((contact, index) => <Tile key={index} contact={contact} />);
    } else {
      return appointment.map((appointment, index) => <Tile key={index} appointment={appointment} />)
    }
  }
  
  
  return (
    <div>
      {rendering()}
    </div>
  );
};
