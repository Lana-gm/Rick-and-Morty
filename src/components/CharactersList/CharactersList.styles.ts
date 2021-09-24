import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import colors from "styles/theme/colors";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 85px auto 0;
  justify-content: space-between;

  @media (max-width: 666px) {
    flex-direction: column;
    width: 300px;
    margin: 85px auto 0;
  }

  li {
    text-align: center;
    border-radius: 8px;
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.colors.gray.primary};
  }
`;

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  height: calc(100vh - 85px);
  width: 100%;
`;

export const Icon = styled(AiFillStar)<{ favoriteactive?: string }>`
  fill: ${({ favoriteactive }) =>
    favoriteactive === "false" ? `${colors.yellow}` : `${colors.black}`};
  font-size: 24px;
  padding-bottom: 15px;
`;
