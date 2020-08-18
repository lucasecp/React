import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  padding: 20px 10px;
  color: #000e;
  margin-left: 20px;
  display:inline-block;
`;
export const ContainerAluno = styled.div`
  padding: 30px 20px;
  img {
    border-radius: 50%;
    height: 40px;
  }
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  div + div {
    padding: 20px 0;
    border-top: solid #0005 1px;
    margin-top: 20px;
  }
`;

export const Modal = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #0006;
  display: ${(props) => (props.display ? props.display : 'none')};
  .modalContent {
    z-index: 2;
    height: 120px;
    width: 50%;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    background: #fff;
    position: relative;
    top: 50px;
    left: 25%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 35px 1fr 35px;
    color: #fff;
    background: #dc3545;
  }
  .modalContent > span {
    font-size: 30px;
    cursor: pointer;
    justify-self: end;
    margin-right: 5px;
    height: 30px;
    align-self: flex-start;
  }

  .modalBody {
    justify-self: center;
    align-self: start;
  }
  .modalFooter {
    justify-self: center;
    align-self: start;
  }
  .modalFooter button {
    margin-right: 10px;
    color: #fff;
    background: transparent;
    border: solid #fcc 0.5px;
    border-radius: 4px;
    padding: 5px;
    outline: none;
    transition: 0.2s linear;
    &&:focus,
    :hover {
      background: #0004;
    }
  }
`;
export const MyLink = styled(Link)`
  color: green;
  font-size: 20px;
  float: right;
  padding:20px 20px 0 0;
`;
