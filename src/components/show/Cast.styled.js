import styled from "styled-components";
export const CastList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;
export const CastItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
  }
`;
export const PicWrapper = styled.div`
  width: 60px;
  min-width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border: 2px solid #e0d4ff;
  background-color: #fff;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export const ActorInfo = styled.div`
  margin-left: 20px;
  .name {
    font-weight: bold;
    font-size: 16px;
    color: #2575fc;
    display: block;
  }
  .character {
    color: #6a11cb;
    font-size: 14px;
  }
  .voice {
    color: #00b74a;
    font-size: 13px;
    font-style: italic;
  }
`;
