import styled, { css } from "styled-components";

export const MainDiv = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const commonStyles = css`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 25vh;
  padding: 20px;
`;
export const LeftDiv = styled.div`
  border-top-right-radius: 50px;
  background-color: #279df2;
  ${commonStyles}
  h3, p {
    color: white;
  }
  p {
    margin: 5px 0 10px 0;
  }
  @media (max-width: 590px) {
    h3 {
        font-size:18px;
    }
    p{
        font-size:12px;
    }
    
  }
`;
export const RightDiv = styled.div`
  border-top-left-radius: 50px;
  background-color: #1e1e1e;
  ${commonStyles}
  h3 {
    margin: 2px;
    color: white;
    span {
      margin-left: 5px;
      color: #279df2;
      font-size: 20px;
    }
  }
  h4 {
    color: white;
  }
  @media (max-width: 590px) {
    h3{
        font-size:12px;
        span{
            font-size:14px;
        }
    }
    h4{
        font-size:10px;
    }
  }
`;

export const LocationDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    margin-right: 10px;
  }
  p{
    margin-top:10px;
    font-size:10px;
  }
`;

export const PortfolioButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 5vh;
  border-radius: 10px;
  background-color: white;
  margin-top: 10px;
  padding:10px;
  a {
    color: #279df2;
    text-decoration: none;
  }
  @media (max-width: 590px) {
    width: 20vw;
    height:8vh;
  }
`;
