import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  padding-top: 30px;
`;
export const ButtonBlue = styled.input`
  width: 184px;
  height: 52px;
  background: #0072d2;
  border-radius: 3px;
  border: 1px solid #131318;
  &:hover {
    transform: scale(1.08);
  }
`;
export const ButtonBlack = styled.input`
  width: 184px;
  height: 52px;
  margin-left: 30px;
  background: #131318;
  border-radius: 3px;
  border: 1px solid #ffffff;
  &:hover {
    transform: scale(1.08);
  }
`;
