/* eslint-disable*/

import { useState } from "react"
import { useCatalogue } from "../../context/catalogue"
import { NavStyled } from "./style"

export const NavBar = () =>{
  const { setRoot, filter } = useCatalogue()

  return(
    <NavStyled>
      <section>
        <button onClick={() =>setRoot("")}>Todos</button>
        <button onClick={() =>setRoot("?type=Comida")}>Alimentos</button>
        <button onClick={() =>setRoot("?type=Brinquedo")}>Brinquedos</button>
        <button onClick={() =>setRoot("?type=Medicamento")}>Farmácia</button>
        <button onClick={() =>setRoot("?type=Higiene")}>Higiene</button>
        <button onClick={() =>setRoot("?type=Acessório")}>Acessórios</button>
      </section>
      <div>
        <input type="text" onChange={(evt) => filter(evt.target.value.toLocaleLowerCase())} />
      </div>

  </NavStyled>
  )
}