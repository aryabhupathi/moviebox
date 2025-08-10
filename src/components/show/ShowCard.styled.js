import styled from "styled-components";

import { SearchCard } from "../styled";

export const StyledShowCard = styled(SearchCard)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    a {
      ${'' /* text-decoration-color: #fff; */}
      text-decoration-color: #fff;
      ${'' /* color: #fff; */}
      color:red;
      &:hover {
        text-decoration-color: red;
        color: black;
      }
    }
    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #4de0e3;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }  h1, p {
    ${'' /* font-size: 1.5rem; */}
    color: white;
    transition: color 0.3s ease;

    &:hover {
      color: red; /* Changes color to red on hover */
    }
  }
`;
