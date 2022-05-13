/* eslint-disable*/

import { useCatalogue } from "../../context/catalogue"
import { NavStyled } from "./style"

export const NavBar = () =>{

  const { setRoot } = useCatalogue()

  return(
    <NavStyled>
    <button onClick={() =>setRoot("")}>Todos</button>
    <button onClick={() =>setRoot("?type=Comida")}>Alimentos</button>
    <button onClick={() =>setRoot("?type=Brinquedo")}>Brinquedos</button>
    <button onClick={() =>setRoot("?type=Medicamento")}>Farmácia</button>
    <button onClick={() =>setRoot("?type=Higiene")}>Higiene</button>
    <button onClick={() =>setRoot("?type=Acessório")}>Acessórios</button>
    {/* <div> 
      <input type="text"/>
    </div> */}
  </NavStyled>
  )
}