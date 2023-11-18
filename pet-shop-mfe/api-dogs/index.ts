import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080;

const dogs = [
  {
    id: 1,
    name: 'Max',
    age: 3,
    breed: 'Beagle',
    image: 'dog1.jpg',
    description:
      'Max, a 3-year-old Beagle, is known for his boundless energy and playful nature. He enjoys long runs in the park and is always up for a game of fetch. His cheerful demeanor makes him a favorite among children and adults alike.',
  },
  {
    id: 2,
    name: 'Max',
    age: 6,
    breed: 'Beagle',
    image: 'dog2.jpg',
    description:
      "Max, another Beagle of 6 years, is a true companion, loving and loyal. His favorite activities include leisurely walks along the beach and cuddling up for a good nap. He's a gentle soul who forms deep bonds with his family.",
  },
  {
    id: 3,
    name: 'Charlie',
    age: 10,
    breed: 'Poodle',
    image: 'dog3.jpg',
    description:
      "Charlie, the 10-year-old Poodle, carries wisdom in his eyes. He's seen many years but retains a gentle and calm demeanor. He's the perfect walking buddy, always keeping a steady pace and enjoying the sights around him.",
  },
  {
    id: 4,
    name: 'Luna',
    age: 11,
    breed: 'Labrador Retriever',
    image: 'dog4.jpg',
    description:
      "Luna, an 11-year-old Labrador Retriever, is the epitome of loyalty and love. She's protective of her family, yet gentle and affectionate. Luna loves swimming and is often found playing in water during the warmer months.",
  },
  {
    id: 5,
    name: 'Charlie',
    age: 2,
    breed: 'French Bulldog',
    image: 'dog5.jpg',
    description:
      'Young Charlie, a 2-year-old French Bulldog, is full of curiosity and spunk. He loves exploring new environments and is always eager to meet new friends. His playful antics bring laughter and joy to everyone around him.',
  },
  {
    id: 6,
    name: 'Bella',
    age: 9,
    breed: 'French Bulldog',
    image: 'dog6.jpg',
    description:
      'Bella, a 9-year-old French Bulldog, is the heart and soul of her family. With her charming demeanor and friendly nature, she makes friends wherever she goes. Bella enjoys leisurely strolls in the park and cozy evenings at home.',
  },
];

app.use(express.static('public'));
app.use(cors());

app.get('/dogs', (req, res) => {
  res.send(dogs);
});

app.get('/dog/:id', (req, res) => {
  const id = Number(req.params.id);
  const dogFound = dogs.find((dog) => dog.id === id);

  if (!dogFound) {
    res.status(404).send({ message: 'Not found' });
    return;
  }

  res.send(dogFound);
});

app.listen(port, () => {
  console.log(`api-dogs listening at http://localhost:${port}`);
});
