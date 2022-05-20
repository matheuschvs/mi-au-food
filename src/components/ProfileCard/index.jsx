/*eslint-disable*/

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth';
import { ShopForm } from '../ShopForm';
import { ProductButton } from '../../pages/Product/style';
import { Section } from './style';
export const ProfileCard = () => {
  const { user } = useAuth();
  const [modal, setModal] = useState(false);
  const [adress, setAdress] = useState({});

  useEffect(() => {
    axios
      .get(`https://viacep.com.br/ws/${user.cep}/json/`)
      .then(response => setAdress(response.data));
  }, [user.cep]);

  return (
    <>
      <Section>
        <p><span>Nome:</span>  {user.name}</p>
        <p><span>Email:</span> {user.email}</p>
        <p>
          <span>Cidade:</span> {adress.localidade}, {adress.uf}
        </p>
        <p><span>Contato:</span> {user.contato}</p>
        <p>
          <span>Endereço:</span> {adress.logradouro} - {adress.bairro}
        </p>
        <ProductButton onClick={() => setModal(true)}>Editar</ProductButton>
      </Section>
      <ShopForm modal={modal} setModal={setModal} />
    </>
  );
};
