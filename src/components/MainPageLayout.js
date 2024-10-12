import React from "react";
import Navs from "./Navs";
import Title from "./Title";
import { MainStyle } from "./MainPageLayout.styled";

const MainPageLayout = ({ children }) => {
  return (
    <MainStyle>
      <Title
        title="Box Office"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navs />

      {children}
    </MainStyle>
  );
};

export default MainPageLayout;
