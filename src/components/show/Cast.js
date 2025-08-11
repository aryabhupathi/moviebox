import IMG_PLACEHOLDER from "../../images/ito.png";
import { CastList, CastItem, PicWrapper, ActorInfo } from "./Cast.styled";
const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <CastItem key={key}>
          <PicWrapper>
            <img
              src={person.image ? person.image.medium : IMG_PLACEHOLDER}
              alt={`${person.name} - ${character.name}`}
            />
          </PicWrapper>
          <ActorInfo>
            <span className="name">{person.name}</span>
            <span className="character">as {character.name}</span>
            {voice && <span className="voice">| Voice Role</span>}
          </ActorInfo>
        </CastItem>
      ))}
    </CastList>
  );
};
export default Cast;
