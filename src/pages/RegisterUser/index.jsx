import { Input, DivTeste, Container, Form } from './style';

export const RegisterUser = () => {
  return (
    <Container>
      <DivTeste />
      <Form>
        <div>
          <h1>Registrese e faça parte da família Mi-Au Food</h1>
          <Input placeholder="nome" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirmar Senha" />
          <h3>Já possui conta? Faça LINK</h3>
        </div>
      </Form>
    </Container>
  );
};
