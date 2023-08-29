import styled from 'styled-components'
export const Button = styled.button`
  color: #fff;
  padding: 10px 18px;
  background-color: #000;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: .3s background ease-in;
 

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
    cursor: pointer;
   
  }
`;
export const OutlineButton = styled(Button)`
background-color: #fff;
border: 1px solid #000;
color: #000;
 &:hover {
    background-color: #000;
    border: 1px solid transparent;
    color: #fff;
    cursor: pointer;
   
  }
  
`;