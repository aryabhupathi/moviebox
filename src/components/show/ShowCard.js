import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../all/AuthContext";
import { StyledShowCard } from "./ShowCard.styled";
import { Star } from "../styled";
import styled from "styled-components";
const AlertBox = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid red;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 5px;
  text-align: center;
  animation: fadeOut 2s forwards;
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
`;
const ShowCard = ({ id, image, name, summary, onStarClick, isStarred }) => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";
  const handleStarClick = () => {
    if (!user) {
      setMessage("Please log in to star this show.");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      onStarClick();
      setMessage("");
    }
  };
  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>
      <h1 style={{ color: "red" }}>{name}</h1>
      <p style={{ color: "black" }}>{summaryAsText}</p>
      <div className="btns">
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" onClick={handleStarClick}>
          <Star active={isStarred} />
        </button>
      </div>
      {message && <AlertBox>{message}</AlertBox>}
    </StyledShowCard>
  );
};
export default ShowCard;
