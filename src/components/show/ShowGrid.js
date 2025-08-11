import ShowCard from "./ShowCard";
import { FlexGrid } from "../styled";
import IMAGE_NOT_FOUND from "../../images/ito.png";
import { useShows } from "../../../src/misc/custom-hooks";
import { useLocation } from "react-router-dom";
const ShowGrid = ({ data }) => {
  const location = useLocation();
  const showsData = data || location.state?.data || [];
  const [starredShows, dispatchStarred] = useShows();
  if (showsData.length === 0) {
    return <div>No shows available</div>;
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
