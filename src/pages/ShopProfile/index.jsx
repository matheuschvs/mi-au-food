/* eslint-disable*/

import { useEffect } from "react";
import { useState } from "react";
import { ProfileCard } from "../../components/ProfileCard";
import { useAuth } from "../../context/auth";
import { API } from "../../services/api";
import { Main } from "./style";

export const ShopProfile = () => {
  
  const [ordersAvailable, setOrdersAvailable] = useState([])
  const token = localStorage.getItem('@mi-au-food:token')

  useEffect(() => {
  API.get(`request`, { headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` 
}})
.then((response) => {setOrdersAvailable(response.data)})

  },[])


  return (
    <Main>
      <ProfileCard/>
      <ul>
<p>{ordersAvailable.length}</p>
      </ul>
    </Main>

  );
};
