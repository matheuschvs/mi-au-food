/*eslint-disable*/

import axios from "axios"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/auth"
import { ShopForm } from "../ShopForm"
import {ProductButton} from "../../pages/Product/style"
import { Section } from "./style"
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
    <Section>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Cidade: {adress.localidade}, {adress.uf}</p>
      <p>Contato: {user.contato}</p>
      <p>Endereço: {adress.logradouro} - {adress.bairro}</p>
      <ProductButton onClick={() => setModal(true)} >Editar</ProductButton>
    </Section>
    <ShopForm modal={modal} setModal={setModal} />
    </>
  )
}