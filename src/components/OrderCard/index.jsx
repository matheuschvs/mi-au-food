/* eslint-disable*/
import { useState } from 'react';
import { Li } from '../../pages/ShopProfile/style';
import { ProductButton } from '../../pages/Product/style';
import { OrderPopUp } from '../OrderPopUp';
import { useAuth } from '../../context/auth';

export const OrderCard = ({ order }) => {
  const { user } = useAuth();
  const [modal, setModal] = useState(false)
  const handleModal= () => {
    setModal(true)
    console.log(order)
  }
  const handleUpdate = () =>{
    order.status = 'Andamento'
    const newOrder = {...order, shopId:user.id }
    console.log(newOrder)
  }
  const handleDelivery = () =>{
    order.status ='Entregue'
    console.log(order)
  }
  return(
    <Li onClick={handleModal}>
      <p>{order.user.name}</p>
      <p>{order.status}</p>
      <p>R$ {order.totalCarrinho}</p>
      <OrderPopUp order={order} modal={modal} setModal={setModal}>
        {order.status === 'Aguardando'?(
          <ProductButton onClick={handleUpdate}>Aceitar Pedido</ProductButton>
        ):(
        <ProductButton onClick={handleDelivery}>Confirmar entrega</ProductButton>
        )}
        <ProductButton onClick={() => setModal(false)}>Fechar</ProductButton>
      </OrderPopUp>
    </Li>
  )
}