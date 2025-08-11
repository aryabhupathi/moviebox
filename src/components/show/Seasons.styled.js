import styled from "styled-components";
export const SeasonsWrapper = styled.div`
  padding: 20px;
  background-color: #f9f7ff;
  border-radius: 16px;
  margin-bottom: 40px;
  p {
    margin: 8px 0;
    font-size: 16px;
    color: #333;
  }
  span {
    font-weight: 700;
    color: #5a189a;
  }
`;
export const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  .season-item {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 15px 20px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    }
    .left {
      flex: 0 0 30%;
      padding-right: 20px;
      border-right: 2px solid #e0d4ff;
      min-width: 120px;
      p {
        margin: 5px 0;
        font-weight: 600;
        color: #3c096c;
      }
      p:nth-child(2) {
        font-size: 14px;
        color: #6a11cb;
      }
    }
    .right {
      padding-left: 20px;
      flex: 1;
      font-size: 14px;
      color: #5f5f5f;
      span {
        color: #2575fc;
        font-weight: 600;
      }
    }
  }
`;
