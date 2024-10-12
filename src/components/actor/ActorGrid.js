import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import ActorCard from "./ActorCard";
import IMAGE_NOT_FOUND from "../../images/ito.png";
import { FlexGrid } from "../styled";

const ActorGrid = ({ data }) => {
  const location = useLocation(); // Use useLocation to get passed state
  const actorData = data || location.state?.data || []; // Fallback to an empty array if data is undefined

  if (actorData.length === 0) {
    return <div>No actors available</div>; // Handle empty data case
  }

  return (
    <FlexGrid>
      {actorData.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
