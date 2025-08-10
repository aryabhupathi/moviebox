// import React from "react";
// import { Link } from "react-router-dom";

// import { StyledShowCard } from "./ShowCard.styled";
// import { Star } from "../styled";

// const ShowCard = ({ id, image, name, summary, onStarClick, isStarred }) => {
//   const summaryAsText = summary
//     ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
//     : "No description";

//   return (
//     <StyledShowCard>
//       <div className="img-wrapper">
//         <img src={image} alt="show" />
//       </div>

//       <h1>{name}</h1>

//       <p>{summaryAsText}</p>

//       <div className="btns">
//         <Link to={`/show/${id}`}>Read more</Link>
//         <button type="button" onClick={onStarClick}>
//           <Star active={isStarred} />
//         </button>
//       </div>
//     </StyledShowCard>
//   );
// };

// export default ShowCard;


// ShowCard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../all/AuthContext"; // Import useAuth
import { StyledShowCard } from "./ShowCard.styled";
import { Star } from "../styled";
import styled from 'styled-components'; // Import styled-components

// Styled Alert Box
const AlertBox = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid red;
  background-color: #f8d7da; /* Light red background */
  color: #721c24; /* Dark red text */
  border-radius: 5px;
  text-align: center;
  animation: fadeOut 2s forwards; /* Fade out animation */
  
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none; /* Hide after fade out */
    }
  }
`;

const ShowCard = ({ id, image, name, summary, onStarClick, isStarred }) => {
  const { user } = useAuth(); // Check if the user is authenticated
  const [message, setMessage] = useState(''); // State to manage the message

  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";

  const handleStarClick = () => {
    if (!user) {
      setMessage("Please log in to star this show."); // Set message if not logged in
      setTimeout(() => {
        setMessage(''); // Clear the message after 2 seconds
      }, 2000); // 2000 milliseconds = 2 seconds
    } else {
      onStarClick(); // Call the original onStarClick if logged in
      setMessage(''); // Clear the message if needed
    }
  };

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>

      <h1 style={{color:'red'}}>{name}</h1>

      <p style={{color:'black'}}>{summaryAsText}</p>

      <div className="btns">
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" onClick={handleStarClick}>
          <Star active={isStarred} />
        </button>
      </div>

      {message && <AlertBox>{message}</AlertBox>} {/* Display styled alert box if message is set */}
    </StyledShowCard>
  );
};

export default ShowCard;

