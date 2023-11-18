import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  Anchor,
} from '@mantine/core';
import classes from './DogCard.module.css';

function DogCard({ name, description, breed, age, image, href }) {
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={name} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {name}
          </Text>
          <Badge size="sm" variant="light">
            {breed}
          </Badge>
          <Badge size="sm" variant="light">
            {age}
            {age > 1 ? ' anos' : ' ano'}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Group mt="xs">
        <Button component="a" radius="md" style={{ flex: 1 }} href={href}>
          Visualizar
        </Button>
      </Group>
    </Card>
  );
}

export default DogCard;
