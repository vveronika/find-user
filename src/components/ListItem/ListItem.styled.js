import styled from "styled-components";

export const ItemWrapper = styled.li`
  font-family: "Lato", sans-serif;
  display: flex;
  margin-bottom: 8px;
  align-items: center;
`;

export const OrderNumber = styled.span`
  display: block;
  margin-right: 3px;
  color: #cccbc7;
  font-size: 11px;
`;

export const Title = styled.p`
  display: block;
  margin: 0 3px 0;
  font-size: 14px;
`;

export const Subtitle = styled.span`
  display: block;
  color: #cccbc7;
  font-size: 11px;

  &:before {
    content: '@';
  }
`;
