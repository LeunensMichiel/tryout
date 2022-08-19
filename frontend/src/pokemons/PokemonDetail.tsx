import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '../components';

type RouteProps = {
  id: string;
};

export const PokemonDetail: FC = () => {
  const { id } = useParams<RouteProps>();
  return (
    <Page>
      <h1>{id}</h1>;
    </Page>
  );
};
