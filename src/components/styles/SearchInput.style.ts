import styled from "styled-components";

export const SearchInputContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-top:40px;
    padding:20px;
`

export const Input = styled.input`
  width: 100%;
  max-width: 450px;
  height: 45px;
  padding: 12px;
  border-radius: 12px;
  border: 1.5px solid lightgrey;
  outline: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
  z-index:5;
  font-size:20px;
 

  &:hover {
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
  }
  &:active{
    transform: scale(0.95);
  }
  &:focus{
    border: 2px solid grey;
  }
`;


