/* eslint-disable*/

import { ProfileCard } from "../../components/ProfileCard";
import { useAuth } from "../../context/auth";
import { Main } from "./style";

export const ShopProfile = () => {
  const {user} = useAuth();

  return (
    <Main>
      <ProfileCard user={user}/>
    </Main>

  );
};
