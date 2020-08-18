import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif, Arial, Helvetica, sans-serif;
    list-style: none;
    margin: 0;
    padding: 0;
}

body{
  background:  #262626
}
button{
  cursor:pointer
}
`;
export const Container = styled.main`
  max-width: ${props => props.width ? props.width : "400px"};
  margin: 50px auto;
  background: #fefefe;
  box-shadow: 4px 4px 4px #000a;
`;
