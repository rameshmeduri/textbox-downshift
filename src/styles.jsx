import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  font-family: sans-serif;
  font-size: 18px;
`;
export const Input = styled.div`
  margin-top: 15px;
  display: flex;
  width: 200px;
  input {
    border: 1px solid mistyrose;
    width: 100%;
    padding: 5px;
    font-family: sans-serif;
    font-size: 15px;
    &::placeholder {
      padding: 5px;
      font-size: 15px;
      font-family: sans-serif;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid mistyrose;
    color: white;
    font-size: 25px;
    width: 40px;
    transform: rotate(90deg);
    background-color: mistyrose;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

export const Menu = styled.ul`
  width: 198px;
  border: 1px solid mistyrose;
  border-radius: 4px;
  font-family: sans-serif;
  margin: 0px;
  margin-top: 10px;
  padding: 0px;
`;

export const Items = styled.li`
  ${({ highlighted, selected }) => {
    if (highlighted) {
      return css`
        background: mistyrose;
      `;
    }
    if (selected) {
      return css`
        background: linen;
      `;
    }
  }};
  padding: 5px;
  list-style: none;
  text-decoration: none;
`;
