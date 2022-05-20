/* eslint-disable*/
import { Li } from '../../pages/ShopProfile/style';
import { ProductButton } from '../../pages/Product/style';
import { useAuth } from '../../context/auth';
import { API } from '../../services/api';

export const OrderCard = ({ setOrders, order, setDisplayOrder }) => {
  const { user,token } = useAuth();
  const updatePage = ()=>{
    API.get(`request`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      setOrders(response.data);
    })   
  }
  
  const handleAcept = () =>{
    order.status = 'Andamento'
    const newOrder = {...order, shopId:user.id }
    API.put(`request/${order.id}`, newOrder, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(()=> updatePage())
  }

  const handleUpdate = (status) =>{
    if(status === 'delivery'){
      order.status ='Entregue'
    } else if(status === 'cancel'){
      order.status ='Cancelado'
    }
    API.put(`request/${order.id}`, order, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(()=> updatePage())
  }

  const showAll = () =>{
    setDisplayOrder(order)
  }

  return(
    <Li>
      <div>
        <p>{order.user.name}</p>
        <p>{order.status}</p>
        <p>R$ {order.totalCarrinho.toFixed(2)}</p>
      </div>
      <div>
        {order.status === 'Aguardando'?(
            <ProductButton onClick={handleAcept}>Aceitar Pedido</ProductButton>
          ):(
            <>
              <ProductButton onClick={()=>handleUpdate('delivery')}>Entregue</ProductButton>
              <ProductButton onClick={()=>handleUpdate('cancel')}>Cancelar</ProductButton>
            </>
          )}
          <ProductButton onClick={showAll}>Ver mais</ProductButton>        
      </div>

    </Li>
  )
}