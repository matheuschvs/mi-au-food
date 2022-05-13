/*eslint-disable*/

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Input, Container, Form, Box } from './style';
import { Button } from '../../components/Button';

export const LoginPage = () => {
  const forSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nome obrigatório')
      .matches(
        /^[a-zA-Z]+$/,
        'Nome de usuário inválido. Somente letras, sem espaços.',
      ),
    password: yup
      .string()
      .required('Senha obrigatória')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        'Pelo menos uma letra maiúscula, um número e caractere especial, 8 caracteres mínimos.',
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forSchema),
  });

  return (
    <Container>
      <Form component="form">
        <Box>
          <h1>Faça seu Login</h1>
          <Input
            {...register('email')}
            label="Email"
            type="email"
            helperText={errors.email?.message}
            error={errors.email?.message}
          ></Input>

          <Input
            {...register('password')}
            label="password"
            type="password"
            helperText={errors.password?.message}
            error={errors.email?.message}
          ></Input>

          <Button type="submit">Login</Button>

          <h3>Não possui conta? Registre-se</h3>
        </Box>
      </Form>
    </Container>
  );
};
