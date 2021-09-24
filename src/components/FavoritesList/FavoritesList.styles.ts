import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 85px auto;
  justify-content: space-between;

  @media (max-width: 666px) {
    flex-direction: column;
    width: 300px;
    margin: 85px auto;
  }

  li {
    text-align: center;
    border-radius: 8px;
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.colors.gray.primary};
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 27px;
  margin-bottom: 12px;
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
`;

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  height: calc(100vh - 85px);
  width: 100%;
`;
