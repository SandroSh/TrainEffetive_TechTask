import styled from "styled-components";

export const ResultBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 14px 50px;
  z-index: 10;

  &:last-child {
    border-radius: 0 0 12px 12px;
  }
  @media (max-width: 590px) {
    padding: 14px 10px;
  }
`;

export const LeftDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ImageBox = styled.div`
  position: relative;
  width: 20%;
  aspect-ratio: 1;
  img {
    position: absolute;

    &:last-child {
      width: 85%;
      border-radius: 50%;
    }
    @media (max-width: 590px) {
    }
  }
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: -20px;
  p {
    letter-spacing: 1px;
    font-size: 12px;
    color: #279df2;
    cursor: pointer;
    text-decoration: black wavy underline;
  }
  @media (max-width: 590px) {
    h1{
      font-size:20px;
    }
  }
`;
