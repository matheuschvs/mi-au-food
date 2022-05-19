/* eslint-disable*/
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/auth';
import { Dialog } from './style';
import { useState } from 'react';

export const ShopForm = ({modal, setModal})=>{
  const { editProfile } = useAuth()

  const usuario = JSON.parse(localStorage.getItem('@mi-au-food:user'));

  const [name, setName] = useState(usuario.name)
  const [contato, setContato] = useState(usuario.contato)
  const [cnpj, setCnpj] = useState(usuario.cnpj)
  const [cep, setCep] = useState(usuario.cep)

  const formSchema = yup.object().shape({
    email: yup.string()
      .required("Email obrigatório")
      .email("Email inválido") ,
    password: yup.string()
      .required("Senha obrigatória"),
    name: yup.string()
      .required(),
    contato: yup.string()
      .required(),
    cep: yup.string()
      .required(),
    cnpj: yup.string()
      .required()

  })

  const { register, handleSubmit, formState:{errors} } = useForm({
      resolver:yupResolver(formSchema)
  })

  const onSubmit = (data) => {
    const newData = {...data, type: 'shop'}
    editProfile(newData)
    setModal(false)
  }

  return(
    <Dialog modal={modal}>
      <div>
    <form onSubmit= {handleSubmit(onSubmit)}>
      <label>Email:</label>
      <input
        {...register("email")}
        placeholder="email"
        value = {usuario.email}
      />
      <label>Senha:</label>
      <input
        {...register("password")}
        placeholder="password"
        type="password"
      />
      <label>Nome da Loja:</label>
      <input
        {...register("name")}
        placeholder="Nome"
        value = {name}
        onChange={(evt)=> setName(evt.target.value)}
      />
      <label>Contato:</label>
      <input
        {...register("contato")}
        placeholder="Contato"
        value = {contato}
        onChange={(evt)=> setContato(evt.target.value)}
      />
      <label>CEP:</label>
      <input
        {...register("cep")}
        placeholder="CEP"
        value = {cep}
        onChange={(evt)=> setCep(evt.target.value)}
      />
      <label>CNPJ:</label>
      <input
        {...register("cnpj")}
        placeholder="CNPJ"
        value = {cnpj} 
        onChange={(evt)=> setCnpj(evt.target.value)}
      />
      <button type="submit">Concluir</button>
      </form>
      <button onClick={() => setModal(false)}>Cancelar</button>
      </div>
      </Dialog>
    
  )
}