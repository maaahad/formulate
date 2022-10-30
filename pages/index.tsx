import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ROUTES from '@context/routes';

const Home = () => {
  const {push} = useRouter();

  useEffect(() => {
    push(ROUTES.SPACE_X.SHIPS.url);
  }, []);

  return null
};

export default Home;
