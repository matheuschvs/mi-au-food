import { Search } from 'react-feather';

import { useCatalogue } from '../../context/catalogue';

import { NavStyled } from './style';

export const NavBar = () => {
  const { setRoot, filter } = useCatalogue();

  return (
    <NavStyled>
      <section>
        <button type="button" onClick={() => setRoot('')}>
          Todos
        </button>
        <button type="button" onClick={() => setRoot('?type=Comida')}>
          Alimentos
        </button>
        <button type="button" onClick={() => setRoot('?type=Brinquedo')}>
          Brinquedos
        </button>
        <button type="button" onClick={() => setRoot('?type=Medicamento')}>
          Farmácia
        </button>
        <button type="button" onClick={() => setRoot('?type=Higiene')}>
          Higiene
        </button>
        <button type="button" onClick={() => setRoot('?type=Acessório')}>
          Acessórios
        </button>
      </section>
      <div>
        <Search color="var(--primary-color)" size="1.2rem" />
        <input
          type="text"
          onChange={evt => filter(evt.target.value.toLocaleLowerCase())}
        />
      </div>
    </NavStyled>
  );
};
