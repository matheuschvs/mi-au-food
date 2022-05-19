import { ChevronLeft } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';

import { Container, Content } from './style';

export const NoContent = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>
        Essa não! parece que você se perdeu <wbr />
        :(
      </h1>
      <p>a página que você tentou acessar não existe.</p>
      <Content>
        <h2>404</h2>
        <div>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            <ChevronLeft />
            Volte para onde estava
          </button>
          <p>ou</p>
          <Link to="/">Vá para a página inicial</Link>
        </div>
      </Content>
    </Container>
  );
};
