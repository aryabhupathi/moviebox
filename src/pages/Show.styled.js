import styled from "styled-components";
export const ShowPageWrapper = styled.div`
  padding: 10px 20px;
  min-height: 100vh;
  @media only screen and (min-width: 516px) {
    padding: 90px 40px;
  }
  @media only screen and (min-width: 768px) {
    padding: 90px 60px;
  }
  @media only screen and (min-width: 992px) {
    padding: 90px 80px;
  }
`;
export const PageSection = styled.section`
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const InfoBlock = styled.div`
  padding: 25px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  margin-bottom: 25px;
  &:hover {
    transform: translateY(-4px);
  }
  h2 {
    margin: 0;
    margin-bottom: 25px;
    font-size: 24px;
    color: #2c2c2c;
    position: relative;
    padding-left: 16px;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 6px;
      height: 24px;
      background: linear-gradient(to bottom, #6a11cb, #2575fc);
      border-radius: 3px;
    }
  }
  p {
    color: #555;
    line-height: 1.6;
    font-size: 16px;
  }
`;
