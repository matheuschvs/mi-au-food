import { useState } from 'react';
import InputStyled from './style';

export const Input = ({ label, name, ...rest }) => {
  const [isValid, setIsValid] = useState(false);

  return (
    <InputStyled valid={isValid}>
      <label>{label.toUpperCase()}</label>
      <input
        {...rest}
        {...register(name)}
        onChange={evt =>
          evt.target.value === '' ? setIsValid(false) : setIsValid(true)
        }
      />
    </InputStyled>
  );
};
