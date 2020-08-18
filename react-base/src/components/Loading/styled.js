import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  span {
    margin-top: 200px;
    font-size: 25px;
    z-index: 2;
  }
  span::after {
    content: '';
    animation: loading 1000ms infinite linear;
  }
  @keyframes loading {
    25% {
      content: '.';
    }
    50% {
      content: '..';
    }
    100% {
      content: '...';
    }
  }
`;
