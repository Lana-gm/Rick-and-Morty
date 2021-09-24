import styled from "styled-components";

export const Input = styled.input`
  width: 250px;
  height: 25px;
  border-radius: 2px;
  border: none;
  padding-left: 5px;

  @media (max-width: 500px) {
    width: 115px;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 27px;
  border-radius: 2px;
  margin-left: 10px;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  transition: all.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.blue.primary};
    background: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 500px) {
    width: 61px;
  }
`;
