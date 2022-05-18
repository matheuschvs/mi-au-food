import { ButtonStyled } from './style';

export const Button = ({ text }) => {
  return (
    <ButtonStyled>
      <p>{text}</p>
    </ButtonStyled>
  );
};
