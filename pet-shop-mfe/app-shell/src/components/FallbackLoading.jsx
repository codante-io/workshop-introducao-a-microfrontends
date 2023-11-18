import { Grid, Skeleton } from '@mantine/core';

function FallbackLoading() {
  return (
    <Grid>
      {new Array(6).fill(null).map(() => (
        <Grid.Col span={4}>
          <Skeleton height={200} mb="xl" />
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default FallbackLoading;
