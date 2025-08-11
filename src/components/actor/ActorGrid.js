import { useLocation } from "react-router-dom";
import ActorCard from "./ActorCard";
import IMAGE_NOT_FOUND from "../../images/ito.png";
import { FlexGrid } from "../styled";
const ActorGrid = ({ data }) => {
  const location = useLocation();
  const actorData = data || location.state?.data || [];
  if (actorData.length === 0) {
    return <div>No actors available</div>;
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
