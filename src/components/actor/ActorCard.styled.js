import styled from "styled-components";

import { SearchCard } from "../../components/styled";

export const StyledActorCard = styled(SearchCard)`
${'' /* background-image: url('./images.jpg'); */}
  .deathday {
    margin: 0;
    margin-top: 15px;
    font-weight: bold;
    color:white;
  }
  h1, p {
    color: white;
    transition: color 0.3s ease;

    &:hover {
      color: red; /* Changes color to red on hover */
    }
  }
`;
