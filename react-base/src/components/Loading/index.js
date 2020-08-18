import React from 'react';
import { Container } from './styled';

export default function Loading(props) {
  if (!props.isLoading) return <> </>;

  return (
    <Container>
      <span>Carregando</span>
    </Container>
  );
}
