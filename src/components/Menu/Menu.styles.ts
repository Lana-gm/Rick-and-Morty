import styled from "styled-components";
import * as S from "react-router-dom";

export const Menu = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.blue.primary};
`;

export const Box = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

export const Link = styled(S.Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;
