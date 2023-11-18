import { useEffect, useState } from 'react';
import { Grid } from '@mantine/core';
import DogCard from './DogCard';

function ListDogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function makeRequest() {
      const result = await fetch('http://localhost:8080/dogs');
      const dogsResult = await result.json();
      setDogs(dogsResult);
    }
    makeRequest();
  }, []);

  return (
    <Grid>
      {dogs.map(({ image, ...dog }) => (
        <Grid.Col span={4}>
          <DogCard
            {...dog}
            image={`http://localhost:8080/${image}`}
            href={`dog/${dog.id}`}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default ListDogs;
