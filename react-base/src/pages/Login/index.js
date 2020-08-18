import React, { useState } from 'react';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Container } from '../../styles/globalStyles';
import { Title, Form, TitleContainer } from './styled';
import * as action from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function Login(props) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const prevPath = get(props, 'location.state.prevPath', '/');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = [];

    if (!email.trim() || !password.trim()) {
      error.push('Campos vazios');
    }
    if (error.length > 0) return error.map((err) => toast.error(err));
    return dispatch(action.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <Loading isLoading={loading} />
      <TitleContainer>
        <Title> Login </Title>
        <Link to="/register">
          <Title className="login">Criar usuário</Title>
        </Link>
      </TitleContainer>

      <Form onSubmit={handleSubmit}>
        <div>
          <FaEnvelope className="inputIcon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <FaKey className="inputIcon" />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
