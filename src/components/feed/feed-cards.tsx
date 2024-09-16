import { Stack } from '@mui/material';

import RepositoryCard from '../repository/repository-card';

interface FeedCardsProps {
  items: any[]; // If you have more details about the structure of items, replace `any` with the correct type.
}

const FeedCards = ({ items }: FeedCardsProps) => (
  <Stack spacing={2}>
    {items.map((item) => (
      <RepositoryCard key={item._id} {...item} />
    ))}
  </Stack>
);

export default FeedCards;
