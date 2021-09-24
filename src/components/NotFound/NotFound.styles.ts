import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 85px);
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 85px;
`;

export const Image = styled.img`
  width: 500px;

  @media (max-width: 500px) {
    width: 300px;
  }
`;
