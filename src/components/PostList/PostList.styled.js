import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Title = styled.h2`
  font-size: 20px;
  color: ${getRandomHexColor()};
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  padding: 10px;
  background-color: ${getRandomHexColor()};
  border-radius: 10px;
`;

export const Image = styled.img`
  display: block;
  height: auto;
  width: 200px;
`;

export const TitleSecond = styled.h4`
  color: ${getRandomHexColor()};
  font-size: 36px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${getRandomHexColor()};
`;
