import React from "react";
import ShowCard from "./ShowCard";
import { FlexGrid } from "../styled";
import IMAGE_NOT_FOUND from "../../images/ito.png";
import { useShows } from "../../../src/misc/custom-hooks";
import { useLocation } from "react-router-dom"; // Import useLocation

const ShowGrid = ({ data }) => {
  const location = useLocation(); // Get location to access state
  const showsData = data || location.state?.data || []; // Fallback to an empty array if data is undefined

  const [starredShows, dispatchStarred] = useShows();

  if (showsData.length === 0) {
    return <div>No shows available</div>; // Handle empty data case
  }

  return (
    <FlexGrid>
      {showsData.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: "REMOVE", showId: show.id });
          } else {
            dispatchStarred({ type: "ADD", showId: show.id });
          }
        };

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
