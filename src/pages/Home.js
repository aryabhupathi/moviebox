// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import MainPageLayout from "../../src/components/MainPageLayout";
// import { apiGet } from "../../src/misc/config";
// import CustomRadio from "../components/CustomRadio";
// import {
//   RadioInputsWrapper,
//   SearchButtonWrapper,
//   SearchInput,
// } from "./Home.styled";

// const Home = () => {
//   const [input, setInput] = useState("");
//   const [searchOption, setSearchOption] = useState("shows");
//   const navigate = useNavigate(); // Initialize useNavigate

//   const isShowsSearch = searchOption === "shows";

//   const onSearch = () => {
//     apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
//       if (result.length > 0) {
//         const path = result[0].show ? "/shows" : "/actors";
//         navigate(path, { state: { data: result } }); // Use navigate instead of history.push
//       }
//       console.log(result, 'rrrrrrr')
//     });
//   };

//   const onInputChange = (ev) => {
//     setInput(ev.target.value);
//   };

//   const onKeyDown = (ev) => {
//     if (ev.keyCode === 13) {
//       onSearch();
//     }
//   };

//   const onRadioChange = (ev) => {
//     setSearchOption(ev.target.value);
//   };

//   return (
//     <MainPageLayout>
//       <SearchInput
//         type="text"
//         placeholder="Search for something"
//         onChange={onInputChange}
//         onKeyDown={onKeyDown}
//         value={input}
//       />
//       <RadioInputsWrapper>
//         <div>
//           <CustomRadio
//             label="Shows"
//             id="shows-search"
//             value="shows"
//             checked={isShowsSearch}
//             onChange={onRadioChange}
//           />
//         </div>

//         <div>
//           <CustomRadio
//             label="Actors"
//             id="actors-search"
//             value="people"
//             checked={!isShowsSearch}
//             onChange={onRadioChange}
//           />
//         </div>
//       </RadioInputsWrapper>

//       <SearchButtonWrapper>
//         <button type="button" onClick={onSearch}>
//           Search
//         </button>
//       </SearchButtonWrapper>
//     </MainPageLayout>
//   );
// };

// export default Home;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import MainPageLayout from "../../src/components/MainPageLayout";
import { apiGet } from "../../src/misc/config";
import CustomRadio from "../components/CustomRadio";
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from "./Home.styled";
import styled from 'styled-components'; // Import styled-components

// Styled Alert Box
const AlertBox = styled.div`
  position: absolute; // Positioning the alert box
  top: 60px; // Distance from the top
  right: 20px; // Distance from the right
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

const Home = () => {
  const [input, setInput] = useState("");
  const [searchOption, setSearchOption] = useState("shows");
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message
  const navigate = useNavigate(); // Initialize useNavigate

  const isShowsSearch = searchOption === "shows";

  const onSearch = () => {
    if (!input.trim()) { // Check if input is empty or contains only spaces
      setAlertMessage("Please enter a search term."); // Set alert message
      setTimeout(() => {
        setAlertMessage(''); // Clear the message after 2 seconds
      }, 2000); // 2000 milliseconds = 2 seconds
      return; // Exit the function if no input
    }

    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      if (result.length > 0) {
        const path = result[0].show ? "/shows" : "/actors";
        navigate(path, { state: { data: result } }); // Use navigate instead of history.push
      }
      console.log(result, 'rrrrrrr');
    });
  };

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </div>

        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>

      {alertMessage && <AlertBox>{alertMessage}</AlertBox>} {/* Display alert box if message is set */}
    </MainPageLayout>
  );
};

export default Home;
