import React from 'react';
import { useGetDataQuery } from './api';

import './styles.scss';

const Home: React.FC<{}> = () => {

  const { data, isLoading } = useGetDataQuery('');

  return (
    <div className="relative h-[calc(100vh - 190px)] " >
      {isLoading
        ? <div>Loading</div>
        : (
          <div>
            {data}
            Hello World
          </div>)
      }
    </div>
  );
};

export default Home;
