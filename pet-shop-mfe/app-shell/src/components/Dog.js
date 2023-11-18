import { useParams } from 'react-router-dom';
import ShowDog from 'dogs/ShowDog';

function Dog() {
  const { id } = useParams();
  return <ShowDog dogId={id} />;
}

export default Dog;
