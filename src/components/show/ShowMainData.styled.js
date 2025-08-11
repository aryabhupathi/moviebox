import styled from "styled-components";
export const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  padding: 30px;
  background-color: #f9f9ff;
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  img {
    min-width: 250px;
    width: 300px;
    max-height: 450px;
    border-radius: 30px;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.02);
    }
  }
  .text-side {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    .summary {
      color: #4a4a4a;
      line-height: 1.6;
      font-size: 1rem;
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    text-align: center;
    img {
      margin: auto;
      margin-bottom: 20px;
    }
    .text-side {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;
export const Headline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  h1 {
    margin: 0;
    font-size: 2rem;
    color: #2c2c2c;
    background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-right: 25px;
    border-right: 2px solid #ddd;
  }
  div {
    display: flex;
    align-items: center;
    background-color: #fff3cd;
    padding: 6px 12px;
    border-radius: 25px;
    font-weight: bold;
    color: #856404;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    svg {
      fill: #ffc107;
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
    span {
      font-size: 1rem;
    }
  }
`;
export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
  span {
    background-color: #ffe0ec;
    color: #d6186a;
    font-weight: 500;
    padding: 6px 14px;
    border-radius: 30px;
    font-size: 14px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #ffd1e6;
    }
  }
`;
