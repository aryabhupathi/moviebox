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


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import MainPageLayout from "../../src/components/MainPageLayout";
// import { apiGet } from "../../src/misc/config";
// import CustomRadio from "../components/CustomRadio";
// import {
//   RadioInputsWrapper,
//   SearchButtonWrapper,
//   SearchInput,
// } from "./Home.styled";
// import styled from 'styled-components';

// // Container for centering everything
// const HomeContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   ${'' /* padding: 20px; */}
//   min-height: 80vh;
// `;

// // Section for search input
// const SearchSection = styled.div`
//   width: 100%;
//   max-width: 600px;
//   margin-bottom: 30px;
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 0 20px;
//   }
// `;

// // Styled Alert Box
// const AlertBox = styled.div`
//   position: fixed;
//   top: 20px;
//   right: 20px;
//   padding: 15px 25px;
//   border: 1px solid red;
//   background-color: #f8d7da;
//   color: #721c24;
//   border-radius: 6px;
//   z-index: 999;
//   animation: fadeOut 4s forwards;

//   @keyframes fadeOut {
//     0% {
//       opacity: 1;
//     }
//     90% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//       display: none;
//     }
//   }

//   @media (max-width: 600px) {
//     font-size: 14px;
//     padding: 10px 20px;
//   }
// `;

// // Styled Button
// const StyledButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 12px 24px;
//   font-size: 16px;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }

//   @media (max-width: 600px) {
//     width: 100%;
//     font-size: 14px;
//   }
// `;

// export const LabelText = styled.label`
//   font-weight: bold;
//   margin-right: 10px;
// `;

// const Home = () => {
//   const [input, setInput] = useState("");
//   const [searchOption, setSearchOption] = useState("shows");
//   const [alertMessage, setAlertMessage] = useState("");
//   const navigate = useNavigate();

//   const isShowsSearch = searchOption === "shows";

//   const onSearch = () => {
//     if (!input.trim()) {
//       setAlertMessage("Please enter a search term.");
//       setTimeout(() => setAlertMessage(''), 3000);
//       return;
//     }

//     apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
//       if (result.length > 0) {
//         const path = result[0].show ? "/shows" : "/actors";
//         navigate(path, { state: { data: result } });
//       }
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
//       <HomeContainer>
//         <SearchSection>
//           <h1>Search for Shows or Actors</h1>
//           <SearchInput
//             type="text"
//             placeholder="e.g., Breaking Bad, Tom Cruise..."
//             onChange={onInputChange}
//             onKeyDown={onKeyDown}
//             value={input}
//           />
          
//           <RadioInputsWrapper>
//             <div>
//               <CustomRadio
//                 label="Shows"
//                 id="shows-search"
//                 value="shows"
//                 checked={isShowsSearch}
//                 onChange={onRadioChange}
//               />
//             </div>

//             <div>
//               <CustomRadio
//                 label="Actors"
//                 id="actors-search"
//                 value="people"
//                 checked={!isShowsSearch}
//                 onChange={onRadioChange}
//               />
//             </div>
//           </RadioInputsWrapper>

//           <SearchButtonWrapper>
//             <StyledButton onClick={onSearch}>Search</StyledButton>
//           </SearchButtonWrapper>
//         </SearchSection>
//       </HomeContainer>

//       {alertMessage && <AlertBox>{alertMessage}</AlertBox>}
//     </MainPageLayout>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPageLayout from "../../src/components/MainPageLayout";
import { apiGet } from "../../src/misc/config";
import CustomRadio from "../components/CustomRadio";
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from "./Home.styled";
import styled from 'styled-components';

// Styled Alert Box
const AlertBox = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 25px;
  border: 1px solid red;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 6px;
  z-index: 999;
  animation: fadeOut 4s forwards;

  @keyframes fadeOut {
    0% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; display: none; }
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

// Styled Button
const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 14px;
  }
`;

const Home = () => {
  const [input, setInput] = useState("");
  const [searchOption, setSearchOption] = useState("shows");
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const isShowsSearch = searchOption === "shows";

  const onSearch = () => {
    if (!input.trim()) {
      setAlertMessage("Please enter a search term.");
      setTimeout(() => setAlertMessage(''), 3000);
      return;
    }

    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      if (result.length > 0) {
        const path = result[0].show ? "/shows" : "/actors";
        navigate(path, { state: { data: result } });
      }
    });
  };

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onKeyDown = (ev) => {
    if (ev.key === "Enter") {
      onSearch();
    }
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  return (
    <MainPageLayout>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h1>Search for Shows or Actors</h1>
        <p style={{ marginBottom: '20px' }}>e.g., Breaking Bad, Tom Cruise...</p>

        <SearchInput
          type="text"
          placeholder="Search..."
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          value={input}
        />

        <RadioInputsWrapper>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </RadioInputsWrapper>

        <SearchButtonWrapper>
          <StyledButton onClick={onSearch}>Search</StyledButton>
        </SearchButtonWrapper>
      </div>

      {alertMessage && <AlertBox>{alertMessage}</AlertBox>}
    </MainPageLayout>
  );
};

export default Home;