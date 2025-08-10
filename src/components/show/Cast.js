// import React from "react";

// import IMG_PLACEHOLDER from "../../images/ito.png";
// import { CastList } from "./Cast.styled";

// const Cast = ({ cast }) => {
//   return (
//     <CastList>
//       {cast.map(({ person, character, voice }, key) => (
//         <div className="cast-item" key={key}>
//           <div className="pic-wrapper">
//             <img
//               src={person.image ? person.image.medium : IMG_PLACEHOLDER}
//               alt="cast-person"
//             />
//           </div>
//           <div className="actor">
//             <span className="bold">
//               {person.name} | {character.name} {voice ? "| Voice" : ""}
//             </span>
//           </div>
//         </div>
//       ))}
//     </CastList>
//   );
// };

// export default Cast;


import React from "react";
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