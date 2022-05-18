/*eslint-disable*/

import axios from "axios"
import { useEffect, useState } from "react"

export const ProfileCard = ({user}) =>{
  const [adress, setAdress] = useState({})

  useEffect(()=>{
    axios.get(`https://viacep.com.br/ws/${user.cep}/json/`).then(response=>setAdress(response.data))
  },[])
  console.log(adress)

  return(
    <section>
      <p>Nome: {user.name}</p>
      <p>Cidade: {user.cidade}, {user.estado}</p>
      <p>Contato: {user.contato}</p>
      <p>Endereço: {adress.logradouro} - {adress.bairro}</p>
      <button>Editar</button>
    </section>
  )
}