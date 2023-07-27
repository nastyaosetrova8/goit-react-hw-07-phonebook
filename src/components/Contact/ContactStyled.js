import styled from 'styled-components';

export const ContactListStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  p:not(:last-child) {
    margin-right: 8px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    padding: 6px 10px;
    width: 94px;
    color: #030360;
    background-color: #d3d3f5;
    border: 1px solid blue;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    transition: box-shadow 100ms linear;
    cursor: pointer;
  }

  button:hover,
  button:focus {
    box-shadow: none;
    border: none;
  }
`;
