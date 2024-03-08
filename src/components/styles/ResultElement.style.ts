import styled from "styled-components";

export const ResultBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 14px;
  z-index: 10;
  &:last-child {
    border-radius: 0 0 12px 12px;
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
  width: 15%;
  aspect-ratio: 1;
  img {
    position: absolute;

    &:last-child {
      width: 80%;
      border-radius: 50%;
    }
  }
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left:20px;
  margin-top:-20px;
  p {
    letter-spacing:1px;
    font-size: 12px;
    color:#279DF2;
  }
`;
