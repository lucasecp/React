import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #dc3545;
  .fa-header {
    color: #fff;
    align-self: center;
    font-size: 15px;
    justify-self: center;
  }
  .userIsLogged{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    }
  .userIsLogged div{
    color: #fff;
    justify-self: center;
  }
  .userData{
    margin-right: 20px;
  }
  .userData img{
    margin-left: 5px;
  }
  .userIsNotLogged svg{
   margin-right:20px;
  }
  .userIsNotLogged{
    padding: 5px
  }
`;
