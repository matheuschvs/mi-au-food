/*eslint-disable*/

import axios from "axios"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/auth"
import { ShopForm } from "../ShopForm"

export const ProfileCard = () =>{

  const {user} = useAuth();
  const [modal, setModal]= useState(false)
  const [adress, setAdress] = useState({})
  
  useEffect(()=>{
    axios.get(`https://viacep.com.br/ws/${user.cep}/json/`)
    .then(response=>setAdress(response.data))
  },[user.cep])

  return(
    <>
    <section>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Cidade: {adress.localidade}, {adress.uf}</p>
      <p>Contato: {user.contato}</p>
      <p>Endereço: {adress.logradouro} - {adress.bairro}</p>
      <button onClick={() => setModal(true)}>Editar</button>
    </section>
    <ShopForm modal={modal} setModal={setModal} />
    </>
  )
}