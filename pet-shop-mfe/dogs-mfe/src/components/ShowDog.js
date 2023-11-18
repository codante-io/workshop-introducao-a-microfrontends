import { useState, useEffect } from 'react';
import DogCard from './DogCard';

function ShowDog({ dogId }) {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function makeRequest() {
      const result = await fetch(`http://localhost:8080/dog/${dogId}`);
      const dogsResult = await result.json();
      setDog(dogsResult);
    }
    makeRequest();
  }, []);

  return dog ? (
    <DogCard {...dog} image={`http://localhost:8080/${dog.image}`} />
  ) : (
    <p>Loading</p>
  );
}

export default ShowDog;
