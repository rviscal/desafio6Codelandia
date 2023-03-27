import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 400px;
  padding-top: 100px;
`;
export const Img = styled.img`
  width: 184px;
  height: 267px;
  padding-top: 20px;
`;
export const Datail = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
`;
export const StarFill = styled.img`
  width: 33.33;
  height: 31.7;
  padding-right: 10px;
  &:hover {
    transform: scale(1.08);
  }
`;
