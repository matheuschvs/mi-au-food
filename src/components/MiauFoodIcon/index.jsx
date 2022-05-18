/* eslint-disable */
import { MiauFood } from './style';
import { useNavigate } from 'react-router-dom';

export const MiauFoodIcon = () => {
  const navigate = useNavigate();

  return <MiauFood onClick={() => navigate('/inicio')}>Mi-Au-Food</MiauFood>;
};
