import React, { useState } from 'react';
import { FaEnvelope, FaKey, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../styles/globalStyles';
import { Title, Form, TitleContainer } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';
export default function Register() {
  const loading = useSelector(state => state.auth.loading)
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.user.id);
  const userName = useSelector((state) => state.auth.user.name);
  const userEmail = useSelector((state) => state.auth.user.email);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;
    setEmail(userEmail);
    setName(userName);
  }, [id, userName, userEmail]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    const nome = name;
    e.preventDefault();
    const error = [];

    if (name.length < 3 || name.length > 200) {
      error.push('Nome deve ter no mínimo 3 caracteres');
    }

    if (!id && password.length <= 7) {
      error.push('Senha deve ter no mínimo 8 caracteres');
    }

    if (!id && (!name.trim() || !email.trim() || !password.trim())) {
      error.push('Campo(s) vazio(s)');
    }
    if (error.length > 0) return error.map((err) => toast.error(err));
    dispatch(actions.registerRequest({ id, nome, email, password }));
  };

  return (
    <Container>
      <Loading isLoading={loading} />
      <TitleContainer>
        <Title>{id ? `Editar usuário` : `Criar usuário`} </Title>
        <Link to="/login">
          <Title className="login">Fazer Login</Title>
        </Link>
      </TitleContainer>
      <Form onSubmit={handleSubmit}>
        <div>
          <FaUser className="inputIcon" />
          <input
            value={name}
            required
            type="name"
            name="email"
            placeholder="Nome"
            onChange={handleName}
          />
        </div>
        <div>
          <FaEnvelope className="inputIcon" />
          <input
            value={email}
            required
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleEmail}
          />
        </div>

        <div>
          <FaKey className="inputIcon" />
          <input
            value={password}
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handlePassword}
          />
        </div>

        <button type="submit">{id ? 'salvar' : 'cadastrar'}</button>
      </Form>
    </Container>
  );
}
