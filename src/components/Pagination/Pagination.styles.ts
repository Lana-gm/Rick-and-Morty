import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 83px;
  align-items: center;

  button {
    width: 100px;
    height: 27px;
    margin: 0 10px;
    border-radius: 2px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue.primary};
    transition: all 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.blue.secondary};
    }
  }
`;
