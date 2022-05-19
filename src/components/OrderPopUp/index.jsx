/* eslint-disable*/
import { Dialog } from "../ShopForm/style"

export const OrderPopUp = ({ order, modal, children }) => {
    
  return (
    <Dialog modal={modal}>
      <div>
        <h3>Detalhes do Pedido</h3>
        <p><span>Nome:</span> {order.user.name}</p>
        <p><span>Endereço:</span> {order.user.address}</p>
        <p><span>Telefone:</span> {order.user.tel}</p>
        
        <p><span>Produtos</span></p>
        {order.product.map(product =><p key={product.id}>{product.name} - {product.quantity} - R$ {product.price}</p>)}
        <p><span>Valor</span> R$ {order.totalCarrinho}</p>
        <p><span>Quantidade:</span> R$ {order.totalQuantity}</p>
        {children}
      </div>
    </Dialog>
  )
}